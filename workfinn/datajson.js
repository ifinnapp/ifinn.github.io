 const getData = () => {
            $('#loading-overlay').removeClass('hidden');
            fetch('https://script.google.com/macros/s/AKfycbx3dqE-7qIJjYFXbEwKfeJi5cJ7pxt7hHobi6rJWxIgArL7-achDFrUqm2WBcbosmVNvA/exec?sheetName=dashboard')
                .then(function (response) {
                    $('#loading-overlay').addClass('hidden');
                    return response.json();
                })
                .then(function (data) {
                    data.filter((d, addData) => {
                        let dataHTML = '';
                        addData++;

                        dataHTML += `
                          <div class="dark:bg-gray-800 h-screen ">

    <div class="col-span-3 md:col-span-2 flex flex-col items-center md:items-start gap-4 pt-16 px-2">

        <p class="flex justify-center w-full gap-2 pt-4 font-extrabold text-2xl md:text-3xl dark:text-white">
            <span>Impact</span>

            <svg class="w-8 h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z">
                </path>
            </svg>
        </p>


        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-4 mx-auto">

            <div title="All countributed components"
                class="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                <div class="flex gap-2 items-center">
                    <span class="font-bold text-3xl md:text-4xl">
                ${d.column1}
            </span>
                    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
                    </svg>
                </div>
                <span class="font-semibold text-sm text-center">Components contributed</span>
            </div>

            <div title="Users got help"
                class="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                <div class="flex gap-2 items-center">
                    <span class="font-bold text-3xl md:text-4xl">
                ${d.column2}
            </span>
                    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z">
                        </path>
                    </svg>
                </div>
                <span class="font-semibold text-sm text-center">Users got help</span>
            </div>

            <div title="Total favorites received on components"
                class="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                <div class="flex gap-2 items-center">
                    <span class="font-bold text-3xl md:text-4xl">
                 ${d.column3}
            </span>
                    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                        </path>
                    </svg>
                </div>
                <span class="font-semibold text-sm text-center">Favorites received</span>
            </div>

            <div title="component views"
                class="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                <div class="flex gap-2 items-center">
                    <span class="font-bold text-3xl md:text-4xl">
                 ${d.column4}
            </span>
                    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                        </path>
                    </svg>
                </div>
                <span class="font-semibold text-sm text-center">Views in last 30 days</span>
            </div>

        </div>

    </div>

</div>
          `;

                        document.getElementById('myProject').innerHTML += dataHTML;
                      



                    });
                });
        };
  document.getElementById('share').addEventListener('click', () => {
                            const msg = [{
                                "type": "text",
                                "text": "Hello, world"
                            }]
                            shareTargetPicker(msg)
                        });

        function sendText(text) {
            if (!liff.isInClient()) {
                shareTargetPicker(text);
            } else {
                sendflex(text);
            }
        }
        function sendflex(text) {
            liff.sendMessages(text).then(function () {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'ส่งเข้าแชทเรียบร้อย',
                    showConfirmButton: false,
                    timer: 1500
                })


            })
        }
        function shareTargetPicker(text) {
            liff.shareTargetPicker(text).then(function (res) {
                if (res) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'ส่งเข้าแชทเรียบร้อย',
                        showConfirmButton: false,
                        timer: 1500
                    })

                } else {

                    console.log("TargetPicker was closed!");
                }
            }).catch(function (error) {
                window.alert("Failed to send message " + error);
            });
        }
