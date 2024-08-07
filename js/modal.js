/* Credit: https://codepen.io/r3dg3cko/pen/ZLryQG */

$(function(){
    $("#modal01").load("/modal.html"); 
});

function openModal(element) {
    console.log(element);
    console.log(element.id)

    var elementName = document.getElementById("name").innerHTML = element.id;
    
    if(elementName == 'connor') {
        document.getElementById("picture").style.backgroundImage = "url('/images/bio/connor-2.png')";
        document.getElementById("picture-inner").src = "/images/bio/connor-2.png";

        document.getElementById("member-bio").innerHTML = "What's up gamers. Welcome to my new gameplay video. Today I'm playing as the drummer for SUN BURNETTE. It's a really cool game. The drummer class gets to smash stuff with wooden clubs. My favorite video game genres are classic rock, fusion, RnB, and hip hop. Go check out some of my other favorite Lets Play channels like The Beatles, Steely Dan, Frank Ocean, and Kendrick Lamar. I play on the music gaming console a lot but I also play on the art and graphic design console too!";

    } else if(elementName == 'anette') {
        document.getElementById("picture").style.backgroundImage = "url('/images/bio/anette-2.JPG')";
        document.getElementById("picture-inner").src = "/images/bio/anette-2.JPG";

        document.getElementById("member-bio").innerHTML = 'Anette is a multidisciplinary artist from Los Angeles, CA. Though classically trained in violin performance, she prefers to channel her joys, sorrows, and frustrations through rock music. She is the lead singer and bassist of Sun Burnette. Despite all of the angry things she writes about, she doesn’t take life too seriously. In her free time she enjoys painting, reading poetry, cooking, and watching Asian dramas. Her musical inspirations include Japanese Breakfast, No Vacation, La Luz, The Marias, and many more.';

    } else if(elementName == 'marj') {
        document.getElementById("picture").style.backgroundImage = "url('/images/bio/marj-2.png')";
        document.getElementById("picture-inner").src = "/images/bio/marj-2.png";

        document.getElementById("member-bio").innerHTML = 'As the keyboardist for Sun Burnette, Marj enjoys bringing elements to the band\'s sound that are soothing and playful. Besides occasional rhythm guitar for the band, Marj also plays clarinet and marimba. Her musical background includes a love for R&B & soul, which she incorporates when writing melodies for Sun Burnette.\n\n Marj\'s other hobbies include video editing Sun Burnette\'s content, graphic design, tennis, concerts, and spending time with family.';

    } else if(elementName == 'nisarg') {
        document.getElementById("picture").style.backgroundImage = "url('/images/bio/nisarg-2.png')";
        document.getElementById("picture-inner").src = "/images/bio/nisarg-2.png";

        document.getElementById("member-bio").innerHTML = 'Hi everyone my name is Nisarg and I play guitar in Sun Burnette! Music has always been a spiritual outlet for me and I love listening to and creating music that takes people on an adventure. My favorite genres of music are classic rock, grunge, acoustic, and indie with my favorite guitarists being Jimmy Page, Dean DeLeo, John Mayer, and Steve Vai.';
    } else if(elementName == 'band') {

        document.getElementById("name").innerHTML = 'The Band';

        document.getElementById("picture").style.backgroundImage = "url('/images/bio/landing-2.png')";
        document.getElementById("picture-inner").src = "/images/bio/landing-2.png";

        document.getElementById("member-bio").innerHTML = 'SUN BURNETTE is an indie-rock band based in San Diego California. Using their collective experiences as first-gen 20-somethings, they connect with their peers here and abroad through songwriting. Knowingly navigating adolescence with complex identities, they offer a relatable conduit to listeners as a breath of fresh air. Sometimes, it\'s just not that deep. Sometimes it is.';
    }

    document.getElementById("modal01").style.display = "inline-block";

    document.getElementById("navigation").style.display = "none";

    $("html").addClass("modal-open");

}

function enlarge(element) {

    var imgHeight = element.naturalHeight;

    console.log(element)

    console.log(imgHeight);
    
    document.getElementById("img01").src = element.src;
    
    document.getElementById("modal01").style.display = "inline-block";

    $("html").addClass("modal-open");

    if(element.classList.contains('tall')) {
        $(".modal-content").addClass('supertall');
    }
    else if(element.classList.contains('long')) {
        $(".modal-content").height(imgHeight);
    }
    else {
        $(".modal-content").removeClass('supertall');
        $(".modal-content").height('100vh');
    }

    document.getElementById("social-media").style.display = "none";
    document.getElementById("navigation").style.display = "none";

}

function exit(element) {
    $("html").removeClass("modal-open");
    document.getElementById("modal01").style.display = "none";
    document.getElementById("navigation").style.display = "flex";
    document.getElementById("social-media").style.display = "flex";
}