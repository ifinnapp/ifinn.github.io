function searchflex(msgTexts, content) {


    liff.shareTargetPicker([{
        "type": "flex",
        "altText": "แชร์จาก " + liff.getDecodedIDToken().name,
        "contents": {
            "type": "bubble",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "วันเกิด: " + msgTexts,
                        "weight": "bold",
                        "color": "#ffffff",
                        "wrap": true
                    }
                ],
                "backgroundColor": "#00b800"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "image",
                                        "url": "" + liff.getDecodedIDToken().picture,
                                        "aspectMode": "cover",
                                        "size": "full"
                                    }
                                ],
                                "cornerRadius": "100px",
                                "width": "72px",
                                "height": "72px"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "contents": [
                                            {
                                                "type": "span",
                                                "text": "" + liff.getDecodedIDToken().name,
                                                "weight": "bold",
                                                "color": "#000000"
                                            }
                                        ],
                                        "wrap": true
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "ทำนายโดย AI",
                                                "size": "sm",
                                                "color": "#bcbcbc"
                                            }
                                        ],
                                        "spacing": "sm",
                                        "margin": "md"
                                    }
                                ]
                            }
                        ],
                        "spacing": "xl",
                        "paddingAll": "20px"
                    },
                    {
                        "type": "separator"
                    }
                ],
                "paddingAll": "0px"
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "" + content,
                        "wrap": true
                    },
                    {
                        "type": "separator",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "ดูดวงอื่นๆ",
                                    "uri": "https://google.com"
                                },
                                "height": "sm",
                                "style": "primary",
                                "color": "#0a5dcf"
                            }
                        ],
                        "margin": "md"
                    }
                ]
            }
        }
    }])
        .then(function (res) {
            if (res) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'ส่งเข้าแชทเรียบร้อย',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    liff.closeWindow();
                });
            } else {

                console.log("TargetPicker was closed!");
            }
        })
        .catch(function (error) {

            console.log("something wrong happen");
        });
}
