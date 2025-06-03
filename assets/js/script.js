function createAlertBox(x) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.innerHTML = `
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <strong>Alert!</strong> ${x}
    `;

    const currentDiv = document.getElementById("content");
    const card = document.getElementById("card");
    if (!currentDiv) {
        console.error("Content div not found");
        return;
    }
    // Ensure the alert box is initially hidden
    alertBox.style.display = 'block';

    const target = document.querySelector(".card");
    if (target && target.parentElement) {
        target.parentElement.insertBefore(alertBox, target);
    } else {
        console.error("Target .card not found");
    }
    alertBox.style.display = 'block'; // Show the alert box
    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            alertBox.remove();
        }, 300);
    }, 3000);

}


function toHome() {
    const isActive = document.getElementById("Home").classList.contains("active");

    if (isActive) {
        createAlertBox("You are already on that page!");
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
    } else {
        document.querySelectorAll('.selectedContent').forEach(el => {
            el.classList.remove('active');
        });
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
        document.title = "Home | Pranav Singh";
        document.getElementById('Home').classList.add('active');
    }
}
function toProjects() {
    const isActive = document.getElementById("Projects").classList.contains("active");

    if (isActive) {
        createAlertBox("You are already on that page!");
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
    } else {
        document.querySelectorAll('.selectedContent').forEach(el => {
            el.classList.remove('active');
        });
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
        document.title = "Projects | Pranav Singh";
        document.getElementById('Projects').classList.add('active');
    }
}
function toSocial() {
    const isActive = document.getElementById("Socials").classList.contains("active");

    if (isActive) {
        createAlertBox("You are already on that page!");
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
    } else {
        document.querySelectorAll('.selectedContent').forEach(el => {
            el.classList.remove('active');
        });
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
        document.title = "Socials | Pranav Singh";
        document.getElementById('Socials').classList.add('active');
    }
}
function toAbout() {
    const isActive = document.getElementById("About").classList.contains("active");

    if (isActive) {
        createAlertBox("You are already on that page!");
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
    } else {
        document.querySelectorAll('.selectedContent').forEach(el => {
            el.classList.remove('active');
        });
        const viewportWidth = window.innerWidth;
        //console.log("Viewport Width:", viewportWidth);
        if (viewportWidth < 768) {
            document.getElementById("sidebar").style.display = "none"; // Hide sidebar on mobile
            document.getElementById("content").style.margin = "0"; // Reset margin on content
        }
        document.title = "Info | Pranav Singh";
        document.getElementById('About').classList.add('active');
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const contenta = document.getElementById("content");

    const isHidden = sidebar.style.display === "none" || getComputedStyle(sidebar).display === "none";

    if (isHidden) {
        // Show sidebar with animation
        sidebar.style.display = "flex";
        sidebar.style.animation = "sidebarIn 0.3s ease forwards";

        contenta.classList.remove("slide-left");
        contenta.classList.add("slide-right");
        contenta.style.margin = "0 0 0 250px";
    } else {
        // Play exit animation but delay hiding
        sidebar.style.animation = "sidebarOut 0.3s ease forwards";

        contenta.classList.remove("slide-right");
        contenta.classList.add("slide-left");
        contenta.style.margin = "0";

        // Wait for the animation to finish before hiding
        setTimeout(() => {
            sidebar.style.display = "none";
        }, 300); // Match the animation duration
    }
}


// document.querySelectorAll('.nav-item').forEach(el => {
//     el.classList.remove('active');
// });
// document.getElementById('Home').classList.add('active');


window.addEventListener("DOMContentLoaded", () => {
    //console.log("Page loaded");
});
