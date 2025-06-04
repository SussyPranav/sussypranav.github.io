document.addEventListener("DOMContentLoaded", () => {
    const userId = "1379146899520618638"; // Your Discord user ID
    const activityContainer = document.querySelector(".activity"); // The div where activities will be appended

    let currentInterval = null; // Store the interval ID to clear it when needed

    async function fetchActivity() {
        try {
            const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
            const data = await response.json();
            //console.log("Fetched data:", data);  // Log the full response for debugging

            if (!data.success) {
                return;
            }

            const activities = data.data?.activities || [];
            //console.log("Activities:", activities);  // Debug log to ensure activities are fetched correctly

            activityContainer.innerHTML = ""; // Clear the previous activities

            if (activities.length === 0) {
                const noActivityDiv = document.createElement("div");
                noActivityDiv.textContent = "I'm Currently Doing nothing (Offline)";
                activityContainer.appendChild(noActivityDiv);
            }
            //console.log("Number of activities:", activities.length);  // Log the number of activities
            if (activities.length < 3) {

                activity.style.padding = '0px';
            } else if (activities.length >= 3) {
                activity.style.padding = '45px 0px 0px 0px';
            }
            const noActivityDiv = document.createElement("div");
            activities.forEach((activity) => {
                // Ignore custom status (type === 4)
                if (activity.type === 4) {
                    noActivityDiv.className = "nothing";
                    noActivityDiv.textContent = "I'm Currently Doing Nothing (Online)";
                    activityContainer.appendChild(noActivityDiv);
                    return;
                }

                const activityDiv = document.createElement("div");
                activityDiv.className = "activity-item";

                let statusText = "";
                let imageUrl = ""; // Default no image
                let imgElement = document.createElement("img");

                function toggleGrid() {
                    const myContainer = document.querySelector('.popup');
                    myContainer.style.display = 'flex';  // Show it as grid
                }

                imgElement.addEventListener('click', function () {
                    resetInterval(); // Reset the interval for the new activity

                    function spanLol() {
                        var mySpan = document.getElementById('idkk');
                        var img1 = document.getElementById('plswait');
                        function toUnixTime(date) {
                            return Math.floor(date.getTime() / 1000);
                        }
                        var ElapsedTime;

                        var timeE = activity.timestamps.start; // in milliseconds
                        var nowMillis = Date.now(); // in milliseconds

                        var elapsedMillis = nowMillis - timeE;

                        //console.log(`Elapsed milliseconds: ${elapsedMillis}`);

                        var elapsedDate = new Date(elapsedMillis);

                        // "HH:MM:SS"
                        ElapsedTime = elapsedDate.toISOString().substr(11, 8);
                        //console.log(ElapsedTime);
                        mySpan.textContent = `Playing ${activity.name} ${activity.state || ''} ${activity.details || ''} - Elapsed time: ${ElapsedTime}`;
                        document.getElementById("plswait").src = imageUrl;
                    }
                    spanLol();

                    currentInterval = setInterval(spanLol, 1000);  // Start the interval to update the elapsed time every second
                    toggleGrid();
                });

                const toggleButton = document.querySelector('#cross1');
                toggleButton.addEventListener('click', function () {
                    const myContainer = document.querySelector('.popup');
                    myContainer.style.display = 'none';
                    resetInterval(); // Clear interval when the popup is closed
                });

                switch (activity.type) {
                    case 0:
                        statusText = `Playing ${activity.name}`;
                        noActivityDiv.remove();

                        imageUrl = `https://sussypranav.is-a.dev/assets/main/card/img/online.png`; // Default image for non-Spotify activity

                        if (activity.name === "Visual Studio Code") {
                            imageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
                        }
                        break;
                    case 1:
                        noActivityDiv.remove();
                        statusText = `Streaming ${activity.name}`;
                        imageUrl = "https://cdn.discordapp.com/app-assets/383226320970055681/1359299016025964687.png?size=160"; // Default image for non-Spotify activity
                        break;
                    case 2:
                        noActivityDiv.remove();
                        statusText = `Listening to ${activity.details || activity.name} - ${activity.state}`;
                        // Correct Spotify image URL format (removing 'spotify:' prefix)
                        imageUrl = activity.assets?.large_image ? `https://i.scdn.co/image/${activity.assets.large_image.replace('spotify:', '')}` : "";
                        break;
                    case 3:
                        noActivityDiv.remove();
                        statusText = `Watching ${activity.name}`;
                        imageUrl = "https://cdn.discordapp.com/app-assets/383226320970055681/1359299016025964687.png?size=160"; // Default image for non-Spotify activity
                        break;

                    default:
                        noActivityDiv.remove();
                        statusText = activity.name || "No activity";  // Ensure a fallback if no name is found
                        imageUrl = "https://cdn.discordapp.com/app-assets/383226320970055681/1359299016025964687.png?size=160"; // Default image for non-Spotify activity
                }

                imgElement.src = imageUrl;  // Set the image source to the activity's image
                imgElement.alt = "current activity image";

                // Add activity details to the activity div
                const activityTextDiv = document.createElement("div");
                activityTextDiv.className = "activity-text";
                activityTextDiv.textContent = statusText;

                // Append the image and text to the activity div
                activityDiv.appendChild(imgElement);
                activityDiv.appendChild(activityTextDiv);

                // Append this activity to the container
                activityContainer.appendChild(activityDiv);
            });

        } catch (error) {
            console.error("Error fetching activity:", error);
        }
    }

    // First load
    fetchActivity();

    // Keep updating every 5 seconds
    setInterval(fetchActivity, 5000);

    // Function to reset the interval
    function resetInterval() {
        if (currentInterval) {
            clearInterval(currentInterval);  // Clear previous interval
        }
    }
});
