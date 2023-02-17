const jsonCompareList = [
    { title: "5 Days of Powerful, Proven Million-Dollar Business", content: "Training STREAMED from the Comfort Of Your Home", value: 997, foundation: true, elite: true },
    { title: "Access To Our Private Business Network:", content: "Connect With Business Owners & Entrepreneurs from around the world to celebrate your success", value: 197, foundation: true, elite: true },
    { title: "Unlocked: John’s Personal Vault Of Business Worksheets & Blueprints:", content: "Specifically Designed To Put What You’re Learning...Into Action.", value: 97, foundation: true, elite: true },
    { title: "Surprise Bonuses Throughout The Challenge:", content: "If We Told You What It Was...It Wouldn’t Be A Surprise!", value: 297, foundation: true, elite: true },
    { title: "Unlimited Access to Recordings Of The Business Breakthrough Trainings:", content: "Get every Masterclass inside our private Facebook group for 30 days.", value: 97, foundation: true, elite: true },
    { title: "Bonus Mastermind Training Day For VIPs Only:", content: "Special Training On How To 3X Your Power in Business, Mindset, & Relationships in 30 Days (Or Less)", value: 300, foundation: false, elite: true },
    { title: "Behind-The-Scenes Access to All 5 Trainings:", content: "Be In The Zoom Room With John LIVE, Ask YOUR Business Questions And Actively Participate", value: 997, foundation: false, elite: true },
    { title: "30 Days: Lifetime! Access To Recordings Of The Challenge:", content: "Review The Trainings Anytime To Get Even More Revenue Generating Wisdom.", value: 297, foundation: false, elite: true },
    { title: "Private Q&A Session After Every Live Training For VIPs Only (5 Bonus Hours of Q&A!):", content: "Get Expert Business Advice from John on your Business Niche & Real-time Solutions to your Challenges.", value: 400, foundation: false, elite: true }
];

const jsonLogoList = ["abc_logo", "nbc_logo", "cbs_Logo", "cnn_logo", "nyt_logo", "forbes_logo", "wsj_logo", "inc_logo"];

const loadTableData = (data) => {
    let output = '';
    for (let i in data) {
        output += `
            <div class="content padding-16 m-0 position-relative" data-elite="${data[i].elite}" data-foundation="${data[i].foundation}">
                <h3 class="line-height-30 font-md">
                    <mark>${data[i].title}</mark>
                    ${data[i].content}
                    <mark>($${data[i].value} Value)</mark>
                </h3>
                <div class="icons-foundation icon-${data[i].foundation ? "check" : "decline"} position-absolute text-upper text-800 text-vcenter">
                    <i class="fas fa-${data[i].foundation ? "check" : "times"}"></i>
                </div>
                <div class="icons-elite icon-${data[i].elite ? "check" : "decline"} position-absolute text-upper text-800 text-vcenter">
                    <i class="fas fa-${data[i].elite ? "check" : "times"}"></i>
                </div>
            </div>
        `
    }
    $('#categoryList #listData').html(output);
    $('#foundationList #listData').html(output);
    $('#eliteList #listData').html(output);
}

const loadLogoData = (data) => {
    let output = '';
    for (let i in data) {
        output += `
                    <img
                        class="animate"
                        src="assets/images/logos/${data[i]}.png"
                        alt="cbs_Logo"
                    />
                `;
    }
    $('#logoList').html(output);
}

const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

$(function () {
    loadLogoData(jsonLogoList);
    loadTableData(jsonCompareList);

    window.addEventListener("scroll", reveal);
});

