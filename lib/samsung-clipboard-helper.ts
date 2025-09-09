/**
 * 三星A55手機專用剪貼板助手
 * 針對三星設備的特殊處理和優化
 */

export class SamsungClipboardHelper {
  private static isSamsungDevice(): boolean {
    const userAgent = navigator.userAgent;
    return userAgent.includes('Samsung') || 
           userAgent.includes('SM-') || 
           userAgent.includes('Galaxy') ||
           userAgent.includes('SM-A55');
  }

  private static showSuccessMessage(message: string, duration: number = 3000): void {
    const toast = document.createElement('div');
    toast.innerHTML = `
      <div style="
        position: fixed; 
        top: 20%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        background: linear-gradient(145deg, #10B981, #059669); 
        color: white; 
        padding: 18px 28px; 
        border-radius: 16px; 
        font-size: 16px; 
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
        z-index: 10000;
        text-align: center;
        min-width: 260px;
        border: 1px solid rgba(255,255,255,0.3);
        backdrop-filter: blur(10px);
      ">
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
          <span style="font-size: 20px;">✅</span>
          <span>${message}</span>
        </div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.transition = 'all 0.3s ease-out';
        toast.style.transform = 'translate(-50%, -50%) scale(0.9)';
        toast.style.opacity = '0';
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }
    }, duration);
  }

  private static showManualCopyDialog(text: string): void {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(0,0,0,0.6); 
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        backdrop-filter: blur(5px);
      " onclick="this.remove()">
        <div style="
          background: white; 
          padding: 32px; 
          border-radius: 20px; 
          max-width: 400px;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          border: 1px solid #E5E7EB;
        " onclick="event.stopPropagation()">
          <div style="
            width: 60px; 
            height: 60px; 
            margin: 0 auto 20px; 
            background: linear-gradient(145deg, #3B82F6, #1D4ED8);
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
          ">
            <span style="font-size: 24px; color: white;">📱</span>
          </div>
          <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 700; color: #1F2937;">
            三星A55 複製輔助
          </h3>
          <p style="margin: 0 0 20px 0; color: #6B7280; font-size: 15px; line-height: 1.6;">
            請長按下方文字框，選擇「全選」然後「複製」到剪貼板
          </p>
          <div style="
            background: #F8FAFC; 
            border: 2px dashed #CBD5E1; 
            border-radius: 12px; 
            padding: 16px; 
            margin-bottom: 20px;
            position: relative;
          ">
            <textarea 
              readonly 
              style="
                width: 100%; 
                border: none; 
                background: transparent;
                font-size: 14px; 
                resize: none;
                font-family: monospace;
                color: #374151;
                text-align: center;
                outline: none;
                line-height: 1.4;
              "
              rows="3"
              onclick="this.select(); this.setSelectionRange(0, this.value.length);"
              ontouchstart="this.select(); this.focus();"
            >${text}</textarea>
            <div style="
              position: absolute; 
              top: -8px; 
              left: 16px; 
              background: white; 
              padding: 0 8px; 
              font-size: 12px; 
              color: #6B7280;
              font-weight: 500;
            ">
              長按選擇並複製
            </div>
          </div>
          <div style="display: flex; gap: 12px;">
            <button 
              onclick="
                try {
                  navigator.clipboard.writeText('${text.replace(/'/g, "\\'")}').then(() => {
                    this.parentElement.parentElement.parentElement.remove();
                  }).catch(() => {
                    this.parentElement.parentElement.parentElement.remove();
                  });
                } catch(e) {
                  this.parentElement.parentElement.parentElement.remove();
                }
              "
              style="
                flex: 1;
                background: linear-gradient(135deg, #10B981, #059669); 
                color: white; 
                border: none; 
                padding: 14px 20px; 
                border-radius: 12px; 
                font-size: 15px; 
                font-weight: 600;
                cursor: pointer;
              "
            >
              🔄 重試複製
            </button>
            <button 
              onclick="this.parentElement.parentElement.parentElement.remove()"
              style="
                flex: 1;
                background: #F3F4F6; 
                color: #374151; 
                border: none; 
                padding: 14px 20px; 
                border-radius: 12px; 
                font-size: 15px; 
                font-weight: 600;
                cursor: pointer;
              "
            >
              完成
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  public static async copyText(text: string, successMessage?: string): Promise<boolean> {
    const defaultMessage = successMessage || '連結已複製到剪貼板！';
    
    // 首先嘗試現代 Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        this.showSuccessMessage(`✅ ${defaultMessage}`);
        return true;
      } catch (error) {
        console.warn('現代剪貼板API失敗，嘗試備用方案');
      }
    }

    // 備用方案：使用 document.execCommand
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '50%';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      textArea.setAttribute('contenteditable', 'true');
      
      document.body.appendChild(textArea);
      
      if (this.isSamsungDevice()) {
        // 三星設備特殊處理
        textArea.focus();
        textArea.setSelectionRange(0, text.length);
        textArea.select();
        
        // 給三星處理器足夠時間
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (success) {
          this.showSuccessMessage(`🎉 三星A55複製成功！`);
          return true;
        } else {
          this.showManualCopyDialog(text);
          return false;
        }
      } else {
        // 其他設備的標準處理
        textArea.focus();
        textArea.select();
        
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (success) {
          this.showSuccessMessage(`✅ ${defaultMessage}`);
          return true;
        } else {
          this.showManualCopyDialog(text);
          return false;
        }
      }
    } catch (error) {
      console.error('所有複製方法都失敗:', error);
      this.showManualCopyDialog(text);
      return false;
    }
  }

  public static copyCurrentUrl(customMessage?: string): Promise<boolean> {
    const url = window.location.href;
    const message = customMessage || '頁面連結已複製！';
    return this.copyText(url, message);
  }

  public static copyWithShare(text: string, title?: string, shareText?: string): Promise<boolean> {
    // 如果支援原生分享，優先使用
    if (navigator.share) {
      return navigator.share({
        title: title || '分享',
        text: shareText || '',
        url: text
      }).then(() => true).catch(() => {
        // 分享失敗時回到複製模式
        return this.copyText(text);
      });
    } else {
      // 不支援原生分享，直接複製
      return this.copyText(text);
    }
  }
}

export default SamsungClipboardHelper;