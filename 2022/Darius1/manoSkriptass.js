var i=1;
function pradet(){
    if(i==1){
    ats.innerHTML="";
    document.querySelector('input').focus();
    i=0;
    setTimeout(() => {  sk.innerHTML=3; }, 1000);
    setTimeout(() => {  sk.innerHTML=2; }, 2000);
    setTimeout(() => {  sk.innerHTML=1; }, 3000);
    setTimeout(() => {  tikrai_pradeti(); }, 4000);
    }
}
var quotes =[
    'I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.','When we have respect for ourselves and others, we gravitate towards connections that encourage that.','Anger is the ultimate destroyer of your own peace of mind.','A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful.','Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you dont take the shot.','The fact is that grief today is a family matter as much a s it is an individual one.','No one would have crossed the ocean if he could have gotten off the ship in the storm.','The true wealth of a nation lies not in its gold or silver but in its learning, wisdom and in the uprightness of its sons.','Make the decision, make another. Remake one past, you cannot.','Be honest in your feelings, for they are the surest conduit to knowledge...','Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine.','If you want to see a rainbow you have to learn to see the rain.','If I can help people Ill do it by giving them a chance to help themselves; and if I can uplift or inspire, let it be by example, inference and suggestion, rather than by injunction and dictation.','Reading without reflecting is like eating without digesting.','A positive philosophy turns into a positive attitude, which turns into positive actions, which turns into positive results, which turns into a positive lifestyle. A positive life.','We cannot solve problems with the kind of thinking we employed when we came up with them.','Learn as if you will live forever, live like you will die tomorrow.','Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.','Success is not final; failure is not fatal: It is the courage to continue that counts.','Work until your bank account looks like a phone number.','The greatest teacher, failure is.','Buy a man eat fish, he day, teach man, to a life time.','Add flour, sugar, cocoa, baking powder, baking soda, salt and espresso powder to a large bowl or the bowl of a stand mixer.','Add milk, vegetable oil, eggs, and vanilla to flour mixture and mix together on medium speed until well combined.'
]
function tikrai_pradeti(){
    sk.innerHTML="Rašyk!";
    document.querySelector('input').value='';
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('text').innerHTML = quotes[randomNumber]+' (enter)';
    var startTime = performance.now();
    var greitis;
    var b=1;
    document.addEventListener("keyup", function(event) {
        if (event.key === 'Enter'&&b==1) {
            b=0;
            var utext=document.querySelector('input').value;
            var endTime = performance.now();
            greitis=utext.length/((endTime - startTime)/1000)*60;
            var tikslumas;
            var babage=0;
            for(let i=0;i<quotes[randomNumber].length;i++){
                if(utext[i]==quotes[randomNumber][i])babage++;
            }
            tikslumas=babage/quotes[randomNumber].length*100;
            document.getElementById('ats').innerHTML =`Tu rašei ${greitis.toFixed(1)} raidžių per minutę greičiu, ${tikslumas.toFixed(0)}% tikslumu.`;
            document.getElementById('text').innerHTML ="Čia bus tekstas";
            document.querySelector('input').value='';
            i=1;
            sk.innerHTML="";
        }
    });
}