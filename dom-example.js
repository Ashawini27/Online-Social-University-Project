// PASS A FUNC AS A PARAM TO ANOTHER FUNCTION TO WRITE ANONUMOUS FUNCTION 

let facts = [
	"Virginia Tech is a public land-grant research university with its main campus in Blacksburg, Virginia, in the United States.",
	"It also has educational facilities in six regions statewide, a research center in Punta Cana, Dominican Republic, and a study-abroad site in Riva San Vitale, Switzerland.",
	"Virginia Tech's first student, Addison \"Add\" Caldwell registered on October 1, 1872, after hiking over 25 miles from his home in Craig County, Virginia. A statue, located in the Upper Quad of campus commemorates Add's journey to enroll.",
	"The first five presidents of Virginia Agricultural and Mechanical College served in the Confederate States Army or the Confederate government during the Civil War as did many of its early professors including the first Commandant, James H. Lane, a VMI graduate and former Confederate General who taught civil engineering and commerce at the college and is the namesake of Lane Hall, one of the oldest buildings on campus, built in 1888.",
	"As of 2015, VT had more than 240,000 living alumni worldwide.",
	"The university's athletic teams are known as the Virginia Tech Hokies and compete in Division I of the NCAA as members of the Atlantic Coast Conference.",
	"In 1970, the state legislature allowed VPI university status and gave it the present legal name, Virginia Polytechnic Institute and State University. In the early 1990s, university administration authorized the official use of Virginia Tech as equivalent to the full legal name; it has been used as the first-reference name for the school's athletic teams since the 1970s. However, diplomas and transcripts still spell out the formal name. Similarly, the abbreviation \"VT\" is far more common today than either VPI or VPI&SU.",
	"On April 16, 2007, Virginia Tech student Seung-Hui Cho fatally shot 32 faculty members and students and wounded 17 others in two locations on campus before killing himself. The Virginia Tech massacre led to an intense nationwide debate over gun rights, gun safety and efficacy of gun-free zones. It prompted many states to introduce legislation to prohibit public colleges and universities from banning concealed weapons on campus for permit holders.",
	"After Amazon unveiled its second headquarters in Crystal City, VA, Virginia Tech announced plans to build a $1 billion graduate research center adjacent to the facility. The Virginia Tech Innovation Campus will be housed at a million-square-foot campus in Alexandria.",
	"The VT campus is home to twenty-eight residence halls housing both undergraduate and graduate students, and several more are either in the planning stages or under construction.",
	"Virginia Tech's fight song, \"Tech Triumph\", was written in 1919 and remains in use today.",
	"Notable Virginia Tech athletes include Nickeil Alexander-Walker, Frank Beamer, Allan Bristow, Kam Chancellor, Bimbo Coles, Dell Curry, Ace Custis, Renee Dennis, Bill Dooley, Jim Druckenmiller, Terrell Edmunds, Tremaine Edmunds, Bud Foster, Kendall Fuller, Kyle Fuller, Chuck Hartman, Sally Miles, Charles Moir, Johnny Oates, Bruce Smith, Tyrod Taylor, DeAngelo Hall, Isaiah Ford, Angela Tincher, and Michael Vick.",
	"More than 37,000 on and off campus enrollment in 2020 fall, 81 percent undergraduate; 19 percent graduate.",
	"Recognizing that Hokie Stone gives Virginia Tech a distinctive visual identification, the Virginia Tech Board of Visitors directed that the native limestone is incorporated in all new buildings on the central campus.",
	"Tech remains one of only three public universities in the United States to support both a military and a non-military student lifestyle. The corps comprises 3 percent of the undergraduate student body."
];

console.log(facts);


document.getElementById("cs5764-basics").onclick = () => {
	let randomFact = facts[Math.floor(Math.random() * facts.length)];

	// CREATE NEW PARAGRAPH-TAG
	let paragraph = document.createElement("p");
	paragraph.className = "generated-content";

	// CREATE PARAGRAPH CONTENT
	let node = document.createTextNode(randomFact);

	// ADD PARAGRAPH CONTENT TO TAG
	paragraph.appendChild(node);

	// ADD PARAGRAPH TO DIV-CONTAINER WITH ID "content"
	let element = document.getElementById("content");
	element.appendChild(paragraph);
}