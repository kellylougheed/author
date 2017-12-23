var gym = document.getElementById("trio1");
var dorm = document.getElementById("trio2");
var voyage = document.getElementById("trio3");
var cads = document.getElementById("first");

var book = document.getElementById("book");

gym.addEventListener("click", function(event) {

	gym.style.filter = "brightness(100%)";

	dorm.style.filter = "brightness(30%)";
	voyage.style.filter = "brightness(30%)";
	cads.style.filter = "brightness(30%)";
	
	book.style.opacity = 0;
	setTimeout(gymHTML, 1000);
});

dorm.addEventListener("click", function(event) {

	gym.style.filter = "brightness(30%)";

	dorm.style.filter = "brightness(100%)";

	voyage.style.filter = "brightness(30%)";
	cads.style.filter = "brightness(30%)";

	book.style.opacity = 0;
	setTimeout(dormHTML, 1000);

	resetCSStransitions();
});

voyage.addEventListener("click", function(event) {

	gym.style.filter = "brightness(30%)";
	dorm.style.filter = "brightness(30%)";

	voyage.style.filter = "brightness(100%)";

	cads.style.filter = "brightness(30%)";

	book.style.opacity = 0;
	setTimeout(voyageHTML, 1000);

	resetCSStransitions();
});

cads.addEventListener("click", function(event) {

	gym.style.filter = "brightness(30%)";
	dorm.style.filter = "brightness(30%)";
	voyage.style.filter = "brightness(30%)";

	cads.style.filter = "brightness(100%)";

	book.style.opacity = 0;
	setTimeout(cadsHTML, 1000);

	resetCSStransitions();
});

function gymHTML() {
	var newHTML = "<h2>The Graveyard Gymnasium</h2>";
	newHTML += "<p class='book-links'><a href='http://www.mundania.com/book.php?title=The+Graveyard+Gymnasium' target='_blank'>Publisher</a> ";
	newHTML += "<a href='https://www.amazon.com/Graveyard-Gymnasium-Kelly-Lougheed-ebook/dp/B005CQ6MJU/' target='_blank'>Amazon</a></p>";
	newHTML += "<p>It's difficult to be a rebel at an all-girls boarding school like Hawthorn, but Charity Hooper tries her hardest, smuggling food into the library and favoring CliffsNotes over boring volumes of literature. In fact, if Hawthorn weren't an all-girls school, she feels certain she would be having a tempestuous affair with a dangerous rogue who copied all his math homework answers from the back of the book.</p>";
	newHTML += "<p>When Hawthorn hosts a band of exchange students from Romania, Charity knows this is her shot at a tempestuous affair. But after she witnesses an exchange student slurping her roommate's blood one night, she realizes that the Romanians would be less interested in kissing her than in biting her head off. And the Romanians aren't the only vampires lurking on campus, either--according to an old inscription in the school gymnasium, a legion of vampires lie buried alive beneath it.</p>";
	newHTML += "<p>Does she dare confide in the English teacher she wishes were her BFF, Ms. Van Tessel, who mysteriously saved Charity's bitten roommate with a blood transfusion? But why did Ms. Van Tessel have blood in her mini-fridge in the first place? Can Charity even trust her?</p>";
	book.innerHTML = newHTML;
	book.style.opacity = 1;
}

function dormHTML() {
	var newHTML = "<h2>Dormitory of the Dead</h2>";
	newHTML += "<p class='book-links'><a href='http://www.mundania.com/book.php?title=Dormitory+of+the+Dead' target='_blank'>Publisher</a> ";
	newHTML += "<a href='https://www.amazon.com/Dormitory-Dead-Kelly-Lougheed-ebook/dp/B007HCSW1I/' target='_blank'>Amazon</a></p>";
	newHTML += "<p>Blood coming out of the bathroom faucets of Charity Hooper's Hawthorn School dormitory doesn't just mean Charity can't wash her face to maintain her porcelain (well, kind of) complexion--it means there's a dead body from 1923 buried in the plumbing, astonishingly well-preserved by the wet sewage conditions.</p>";
	newHTML += "<p>Well-preserved enough, in fact, for the dead girl's vampire boyfriend to reanimate her as a zombie so they can live happily ever after, massacring innocent Hawthorn students side-by-side.</p>";
	newHTML += "<p>Faced with such homicidal creatures, Charity would ordinarily consult her English teacher, Ms. Van Tessel, whose knowledge of zombie extermination rivals only her knowledge of British literature. But Ms. Van Tessel has gone mysteriously missing. Can Charity track down her teacher before the annual midnight Capture the Flag tournament, which will be nothing more than an all-you-can-eat buffet for the vampire-zombie tag team?</p>";
	book.innerHTML = newHTML;
	book.style.opacity = 1;
}

function voyageHTML() {
	var newHTML = "<h2>Vampire Voyage</h2>";
	newHTML += "<p class='book-links'><a href='http://www.mundania.com/book.php?title=Vampire+Voyage' target='_blank'>Publisher</a> ";
	newHTML += "<a href='https://www.amazon.com/Vampire-Voyage-Kelly-Lougheed-ebook/dp/B009RPU8LK/' target='_blank'>Amazon</a></p>";
	newHTML += "<p>When Charity signs up for the Hawthorn School spring break trip to the St. Judas School for Boys in Romania, she has an inkling the trip won't just be all fun and romantic flings. Being constantly surrounded by exotic European boys would be great...if so many of the boys weren't homicidal vampires.</p>";
	newHTML += "<p>While trying not to succumb to the peer pressure of drinking human blood at one of the vampire parties, Charity and her BFF Louise get tangled up with a boy named Ivan, who may or may not plan on using them in a nefarious scheme to turn all the Hawthorn girls into vampires.</p>";
	newHTML += "<p>Louise refuses to believe Ivan capable of murder--he's far too handsome! But Charity sees evil in the way Ivan slicks his hair back with such unnecessary amounts of hair gel. Can Charity--in between seducing a past fling, Nicholae, and hiding her late-night wanderings from the trip chaperone, Ms. Van Tessel--save her classmates from becoming bloodsucking fiends?</p>";
	book.innerHTML = newHTML;
	book.style.opacity = 1;
}

function cadsHTML() {
	var newHTML = "<h2>Cads and Cadavers</h2>";
	newHTML += "<p class='book-links'><a href='http://www.mundania.com/book.php?title=Cads+and+Cadavers' target='_blank'>Publisher</a> ";
	newHTML += "<a href='https://www.amazon.com/Cads-Cadavers-Kelly-Lougheed-ebook/dp/B005C1K0PC/' target='_blank'>Amazon</a></p>";
	newHTML += "<p>When Velma's dead boyfriend Leroy appears to her in the school biology lab one night, it's awkward because (a) she happens to be dissecting his body for a science fair project, and (b) she never figured out how to break up with him after her roommate informed her that leaving a Post-It note on his dorm room door suggesting they never see each other again was cold and heartless.</p>";
	newHTML += "<p>Leroy tells her a sob story about the vampire who drained his blood and annoyingly demands that Velma, despite the insane amount of math homework she has, avenge his murder.</p>";
	newHTML += "<p>But the only local vampire Velma knows is the chivalrous, dashing Dennis she ran into in the graveyard one night when she was digging up Leroy's body. His mere presence makes her hyperventilate and compulsively smooth down her hair, the signs of true amour. In one of their intimate graveyard chats, Dennis assures her that he sucks only the blood of rodents...</p>";
	newHTML += "<p>But is he just lying to win her heart?</p>";
	newHTML += "<p>Or does another vampire walk hidden among Velma's peers?</p>";
	book.innerHTML = newHTML;
	book.style.opacity = 1;
}

function resetCSStransitions() {
	var images = [gym, dorm, voyage, cads];
	for (var i = 0; i < images.length; i++) {
		images[i].style.transition = "filter .5s";
	}
}
