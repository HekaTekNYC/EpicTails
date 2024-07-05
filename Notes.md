- Pawsy -
  Service - emphasis on color within text
  Why Choose Us - structure and emphasis on color within text
  About Us - blob behind image and the dots/bandaid behind blob

- Muiow -
  Inverted colors on hover
  Why Rely On Us - cleanliness and the image with points on each side

- Animart -
  Loved the color scheme and the icons
  Best Features - image and layout is very cute

- Petopia -
  Hero - cubic bezier animaed wave
  Services - inverted animation on cards
  Welcome To Our Family - we love the staff images with the tops of head sticking out. We could incorp our color scheme
  Gallery - we like the Masonry layout of the images
  Footer - overall layout and the section with working hours with a color block looks super clean
  Contact Us - i like the clean cards with the contact form and map below

- Pawsitive -
  Get in Touch - Blob overlay on map

Idea for us: to have the animated paw prints that fade within a couple section
When you click on a service make it accordian push everything to the left and open a calendar

- Color Schemes -

#BFFAF9
#395892
#3A5B97 - this goes up on the scale like one single point
#3D5F9F - CELESTE Lapis
#7595D5
#373A3D
#FFCECD
#F9A8A7
#FFFFFF

# This is the Utah site

# https://aarfpetcare.com/aarf-house

---

import Button from "./Button.astro";

---

<section id="about-section">
    <!-- control your container height through the about contrainer and take off the left and right side heights -->
    <!-- <div class="about-container">  -->
    <div class="about-container">
        <div class="about-left-side">
            <div class="about-img-container">
                <img class="about-img" src='https://res.cloudinary.com/daecnx7ih/image/upload/v1719690697/dog-kisses_neo4lv.webp' alt="Woman kissing her golden retriever"  width=420>
                <div class="yrs-exp-circle">
                    <p class="yrs-text">
                    <span class="about-bold-yrs">10 +</span> 
                    Years of Experience 
                </p>
                </div>
            </div>
            <img class="about-blob" src='images/about-blob.svg'  alt="pink blob behind woman kissing dog image" width=420/>
        </div>
        <div class="about-right-side">
            <h3>About Us</h3>
            <h2>We Are the Best For Your <span class="focus-font" >Pet Care</span> Services</h2>
            <p class="about-text">At Epic Tales, we provide exceptional pet sitting services that ensure your pets are happy and comfortable while you're away. Our trained sitters are passionate about animals and committed to offering the best care possible.</p>
            <ul class="about-list">
                <li><img src="icons/checkmark.svg" height="20px" > <p>Customized Sitting Plans: Tailored to your pet's needs and routines.</p></li>
                <li><img src="icons/checkmark.svg" height="20px"><p>Interactive Play: Engaging activities to keep pets entertained.</p></li>
                <li><img src="icons/checkmark.svg" height="20px"/><p><span class="bold-li">Regular Updates:</span> Photos and updates to give you peace of mind.</p></li>
            </ul>
            <Button href="#" size="lg" style="secondary" >Read More</Button>
        </div>
    </div>
</section>

<style>
    #about-section {
        /* display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        margin-bottom: 1000px; */
    }

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        /* margin-bottom: 1000px; */
    }
    /* about left side */
    .about-left-side {
        /* position: relative; */
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 100%;
    }

/* About Image Container */
    .about-img-container {
        position: relative;
        display: flex;
        justify-content: end;
        align-items: center;
        height: 420px;
        width: 100%;
        z-index: 2;
    }

    img {
        width: 100%;
        height: auto;
    } 
    .about-img {
        position: absolute;
        display: flex;
        left: 0;
        width: 90%;  
        height: auto; 
       
    }
    .about-blob {
        position: absolute;
        display: flex;
        left: 0;
        left: 1px;
        width: 90%;  
        height: auto; 
        transform: rotate(23deg);
        z-index: -1;
    }

    /* Years Exp Circle */
    .yrs-exp-circle {
        position: absolute;
        bottom: 100px;
        left: -14px; 
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 20px;
        text-align: center;
        color: var(--white);
        background-color: var(--primary-darker);
        border-radius: 50%;
        border: 5px solid var(--white);
        width: 110px;
        height: 110px;
        z-index: 2;
    }
    .yrs-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-size: .9rem;    
        font-weight: 600;
        line-height: 1.1;   
    }
    .about-bold-yrs {
        display: flex;
        white-space: nowrap;
        font-weight: 800;
        font-size: 1.6rem !important;
        line-height: 1;       
    }


    /* About Right Container */
    .about-right-side  {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .about-list li {
        display: flex;
        align-items: center;
        margin: 0;

    }
    .about-list  li img {
        margin-right: 20px;
    }


  
/* Small devices (sm) - 576px and above */
@media (min-width: 576px) {
  
}

/* Medium devices (md) - 768px and above */
@media (min-width: 768px) {
    #about-section {
        display: flex;
        flex-direction: row;
    }
    .about-left-side {
        width: 50%;
        height: 451px;
        margin-right: 20px;
    }
    .about-right-side {
        width: 50%;
    }

    .about-img-container {
        height: 450px;
    }
    .about-img{
       height: 317px;
       width: auto;
    }
    .about-blob {
        height: 317px;
        top: 48px;
        left: 29px;
        transform: rotate(23deg);
    }
   
   .yrs-exp-circle {
        margin: 0;
        top: 225px;
        left: -3px; 
        height: 110px;
        width: 110px;
    }
    .yrs-exp-circle .about-bold-yrs {
        font-size: 1.3rem;
    }

}  
/* Large devices (lg) - 992px and above */
@media (min-width: 992px) {
    
    
    .about-img-container {
        /* height: 382px; */
        height: 382px;
    }
    .about-img {
        height: 374px;
    }
    .yrs-exp-circle {
        top: 121px;
        left: 10px
    }
    .about-blob {
        left: 85px;
        top: -14px;
        height: 370px;
        width: auto;
        transform: rotate(23deg);
    }

    .yrs-text p {
        /* margin: 5px; */
        font-size: 1.3rem;       
    } 
}

@media (min-width: 1000px) {
    .about-img-container {
        height: 447px;
    }
    .about-blob {
        left: 25px;
        top: 17px;
        height: 374px;
    }
    .yrs-exp-circle {
    top:121px;
    left: -8;
    height: 120px;
    width: 120px;
}
}

/* Extra large devices (xl) - 1200px and above */
@media (min-width: 1100px) {
    .about-left-side {
        height: 451px;
    }
    .about-blob {

    }
    .about-img {
        height: 393px;
    }
    .about-blob {
        left: 68px;
        top: 25px;
        height: 393px;
        transform: rotate(19deg)
    }
    .yrs-exp-circle {
        top: 135px;
        left: -7px;
        height: 135px;
        width: 135px;
    }
    .about-bold-yrs {
        font-size: 1.5rem;
    }

    .yrs-text {
        font-size: 1.1rem;

    }
    .about-right-side {
        height: 445px;
        margin-left: 50px;
    }

    .about-right-side .about-list img {
        align-items: left;
    }
}

/* Extra extra large devices (xxl) - 1400px and above */
@media (min-width: 1400px) {
    .about-right-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
}
</style>

<!--
reduce the size of yrs font
ipad mini landscape yrs text circle yuck
.card-front > * {
    this selects everything in the parent container
    position: absolute;
}

.card-front > *:not(.whatever-child-element) {
    position: absolute;
}
how to have image decide the size of the div:
width: min-content; means get as small as you can to fit the image inside there
We do this if we want this width and this height. This way you don't have to keep fucking with the height.
max-width: revert;
define containing block for element...go to the parentand put position: relative
create a selector for card front this goes up in above the parent element
.card-front {
    --card-padding: 2rem;
}


@media (min-width: 960px) {
.card-front,
.card-back {
    position: relative;
    this would be like changing the img and the blob and when thwe screen size got too big i change to relative to make it follow the flow of the content/screen size. Dive in and make space in the doc. position relative keeps it in the flow
    if you have relative its set relative to the parameters fo what you gavce it above. So to manipulate the content you'd want to select the margins.
    inset: auto; is the top, left, right, bottom

}}
  -->
