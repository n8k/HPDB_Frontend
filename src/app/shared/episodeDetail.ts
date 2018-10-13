export class MainCharacters {
	'hastings': 	boolean;
	'lemon': 			boolean;
	'japp': 			boolean;
	'oliver':			boolean;
	'george':			boolean;
}

export class Tropes {
	'poirotTriesToPreventMurder': boolean;	// Poirot tries to prevent murder
	'poirotTriesToPreventCrime':  boolean;	// Poirot tries to prevent other crime
	'poirotLenientJudgeAndJury': 	boolean;	// Poirot solves the case or exposes a crime but does not punish the perpetrators
	'poirotCompulsiveSymmetry': 	boolean;	// Poirot exhibits a compulsive obsession with symmetry and straightening items
	'poirotIsReallyBelgian': 			boolean;	// Poirot is mistaken for French and informs them he's Belgian
	'poirotSolvesColdCase': 			boolean;	// Poirot solves an old case
	'poirotCommitsCrime':					boolean;	// Poirot commits a crime
	'poirotMatchmaker': 					boolean;	// Poirot plays matchmaker and pairs a new couple
	'poirotRetirement': 					boolean;	// Poirot retires
	'poirotAvuncular': 						boolean;	// Poirot assumes a protective role of a younger lady
	'poirotOnHoliday': 						boolean;	// Setting is Poirot on holiday
	'poirotSmitten':  						boolean;	// Poirot in love
	'poirotDentist': 							boolean;	// Poirot visits the dentist
	'hastingsLadyPuzzlement':  		boolean;  // Hastings doesn't understand women
	'hastingsSolvesCase': 				boolean;  // Hastings solves the case
	'hastingsSmitten': 						boolean;	// Hastings in love
	'hastingsTravel': 						boolean;  // Hastings travels abroad
	'hastingsHobby': 							boolean;  // Hastings takes up a hobby
	'hastingsGolf': 							boolean;	// Hastings shows an interest in golf
	'hastingsCar':  							boolean;	// Hastings shows an interest in cars
	'msLemonOrderAndMethod': 			boolean;  // Ms. Lemon does detective work
	'msLemonsFilingSystem': 			boolean;	// Ms. Lemon's filing system is featured in the episode
	'msLemonSupernatural': 				boolean;	// Ms. Lemon shows interest or ability in the supernatural or occult
	'perpTriesToOutmartPoirot': 	boolean;	// Perpetrator intentionally involves Poirot as part of the plot
	'frenchVsEnglishCuisine':			boolean;	// Running jokes in episode about British vs. French food
	'diggingUpThePast': 					boolean;  // Setting is in an archaeological dig in the Middle East
	'christmasSpecial':						boolean;	// Christmas episode
	'artImitatesArt':							boolean;	// Episode involves a murder-mystery play or novel
	'hostIsMurdered': 						boolean;	// The host of a party or invite is murdered at, during, or after the event
	'bridgeGame': 								boolean;  // People play the card game Bridge
	'bonVoyage': 									boolean;  // Crime scene is on a train, plane, or boat
}

export class CrimesArray [{
	perpetrator:  string;
	victim: 			string;
	criminalAct:	string;
	means: 				string;
	motive:				string;
	opportunity: 	string;
}];

export class EpisodeDetail {
	season: number;
	episode: number;
	title: string;
	episodeSummary: string;
	originalAirDate: string;
	supportingCharacters: 	[string];
	director: 		string;
	writer: 			string;
	mood: 				string;
}