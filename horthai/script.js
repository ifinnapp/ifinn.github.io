function generateAndDisplayContent() {
    var msgText = document.getElementById('inp_dt').value;

    if (!msgText) {
        return;
    }


    document.getElementById('btnText').style.display = 'none';
    document.getElementById('loading').style.display = 'inline-block';

    var apiKey = 'AIzaSyD1x6p5TEVvIMQOrjJN-4j8gMXUNcZ2RsY';
  //AI จาก https://aistudio.google.com/app/apikey
  //ifinn.idata@gmail.com
    var apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey;

    var payload = {
        contents: [{
            parts: [{
                text: "ดวงคนที่เกิด " + msgText + "เป็นอย่างไร"
            }]
        }]
    };

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            var generatedContent = data.candidates[0].content.parts[0].text;
            displayContent(msgText, generatedContent);
        })
        .catch(error => console.error('Error:', error));
}

function displayContent(msgTexts, content) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p style="white-space: pre-line;"><b>Gemini ตอบ: </b><br>${content}</p><br>
  <button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" id="flex">Share Content</button>`;
    document.querySelector('#flex').addEventListener('click', () => {

        searchflex(`${msgTexts}`, `${content}`)
    })

    document.getElementById('loading').style.display = 'none';
    document.getElementById('btnText').style.display = 'inline-block';


    document.getElementById('msgInput').value = '';
}

const dt_picker = new tail.DateTime("#inp_dt", {

    startOpen: true,
    stayOpen: true,
    position: "#dt_holder",
    weekStart: 1,
    dateFormat: "dd/M/YYYY",
    timeFormat: false
});


dt_picker.selectDate();
document.querySelector("#inp_dt").addEventListener('change', function () {
    var selectedDate = dt_picker.getDate(); 
    this.value = selectedDate.toLocaleDateString('th-TH', { day: '2-digit', month: '2-digit', year: 'numeric' });
});
