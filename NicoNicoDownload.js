//動画の上で右クリック -> システムメッセージを開いておく必要あり
javascript:
    var messages = document.getElementsByClassName('SystemMessageContainer-info');
for (let message of messages) {
    if (message.innerText.startsWith('動画の読み込みを開始しました。')) {
        message = message.innerText;
        message = (message.split('（'))[1];
        let url = message.substr(0, message.length - 1);
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = 'Movie.mp4';
        link.click();
    }
}