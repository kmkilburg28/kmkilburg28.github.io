const PROJECTS = {
	"categories": [
		{
			"name": "Artificial Intelligence",
			"projects": [
				{
					"name": "<a href='https://github.com/kmkilburg28/MultiAgentSurvival'>Multi-agent Survival Game</a>",
					"description": "A term project for Iowa State's graduate course Principles of Artificial Intelligence. This project was inspired by OpenAI's <a href='https://openai.com/blog/neural-mmo/'>NeuralMMO</a> and can be thought of as a beginner-friendly version. Multiple reinforcement learning algorithms have been tested for their performance at training intelligent agents which are detailed in this <a href='reports/multiagentsurvival.pdf'>report</a>.",
					"graphic": "graphics/multiagentsurvival.mp4"
				},
				{
					"name": "<a href='https://github.com/kmkilburg28/NBA_Predictions'>NBA Predictions</a>",
					"description": "After collecting a database of basketball statistics from 2000 to 2021. Machine learning techniques were tested for their classification performance on selecting a winning team given each team's player statistics. For the methods tested, a deep learning approach where each player's season statistics were fed through an recurrent layer performed the best. Further details can be found in this <a href='reports/nba_predictions.pdf'>report.</a>",
					"graphic": "graphics/nba_predictions.png"
				},
				{
					"name": "<a href='Checkers/'>Checkers AI</a>",
					"description": "A standard checkers board allowing human play as well as customized AI players. The customization come in the form of selecting an evaluation heuristic from those provided as well as a depth to search to throughout its alpha-beta pruning.",
					"graphic": "graphics/checkers.png"
				},
				{
					"name": "<a href='KerasClone/'>Keras Clone</a>",
					"description": "A basic implementation of the Keras API. It supports dense hidden layers as well as linear, ReLU, and sigmoid activation functions.",
					"graphic": "graphics/kerasclone.png"
				},
				{
					"name": "Student Major Predictor",
					"description": "Three separate approaches were taken to predict the major a student would graduate with given their previous class history. The purpose of this project was for a theoretical recommendation system to students with undecided majors. The first approach consisted of evaluating a score for each class taken using a linear model where separately weighted models are used for each major, summing all course evaluations for each major, and then selecting the major with the highest score. The second and third approach use standard deep learning approaches find embedding for all the courses a student has taken and process these with either a global pooling or an LSTM layer. A successful prediction occurred if the actual major was in the top three recommended majors.", // "The success rates produced were 80.58%, "
					"graphic": "graphics/majorpredictor.png"
				}
			]
		},
		{
			"name": "Computer Vision",
			"projects": [
				{
					"name": "<a href='IntonationLearner/'>In-Tone Nation</a>",
					"description": "An intonation learning application to assist in understanding secondary languages. The application works by placing the user into a call-and-response setting. Here, the user is given a audio clip of from a \"model\" speaker, and then, the user is asked to record themselves immitating the speaker. Once the user's voice is recorded, both audio clip's frequencies are placed on a graph for user inspection to determine where major discripancies may lie between the two clips. A detailed report on the project's implementation and testing results may be found <a href='reports/tonenation.pdf'>here</a>.",
					"graphic": "graphics/intone_nation.png"
				},
				{
					"name": "<a href='BackgammonImageProcessing/'>Backgammon Image Processing</a>",
					"description": "Using OpenCV, multiple scripts were written to perform visual computations on backgammon games. These include modifying peice colors, tracking moving pieces, and scoring the board state.",
					"graphic": "graphics/backgammon.png"
				},
				{
					"name": "<a href='AudioProcessing/'>Audio Processing with FFT</a>",
					"description": "A project to change familiarity with Fourier Transforms. It features usage of the FFT to dissect audio files and display their sampled frequencies in spectograms and also usage of the IFFT to construct new audio files.",
					"graphic": "graphics/audioprocessing.png"
				},
				{
					"name": "<a href='PatternProcessing/'>Puzzle Pattern Processing</a>",
					"description": "An introductory project to learning OpenCV. Here, several edits were made to a child's pattern matching puzzle such as isolating the symbols from the grid, identifying different symbols, changing their colors, identifying patterns, and, finally, completing the puzzle by copying the patterns within their rows.",
					"graphic": "graphics/patternprocessing.png"
				}
			]
		},
		{
			"name": "Web Development",
			"projects": [
				{
					"name": "<a href='WebGL/lib/'>WebGL Project</a>",
					"description": "A final project for Iowa State's Introduction to Computer Graphics course. It features the majority of the skills taught in the class using WebGL. Note that the texture designs and dragon model are not my work.",
					"graphic": "graphics/webgl.mp4"
				},
				{
					"name": "<a href='snake/'>Snake Game</a>",
					"description": "This project is a recreation of the famous snake game. There is not much to it, but it is fun to mess with every now and then.",
					"graphic": "graphics/snake.png"
				},
				{
					"name": "CyBuzz",
					"description": "A Reddit clone created as a final project for Iowa State's Contructing User Interfaces course. A more detailed report can be found <a href='reports/cybuzz.pdf'>here</a>.",
					"graphic": "graphics/cybuzz.png"
				},
				{
					"name": "Canvas Utility",
					"description": "An JavaScript library for interfacing with HTML canvas DOMs. It adds support for user, shape manipulation and a hierarchical object structure.",
					"graphic": "graphics/canvasutility.mp4"
				},
				{
					"name": "<a href='https://youtu.be/cxlqhyEJrZc'>Rudiments Android App Web Server</a>",
					"description": "Rudiments is Android rythm game built as a term project for Iowa State's Software Development Practices course. My responsibility within this project was as the sole backend-developer. The backend supports level downloads for both native and user-created levels, scoreboards, multiplayer, and administrative controls.",
					"graphic": "https://www.youtube.com/embed/cxlqhyEJrZc"
				}
			]
		},
		{
			"name": "Unity",
			"projects": [
				{
					"name": "VR Flight Movement",
					"description": "A simple movement system for VR applications where the user is moved in the opposite direction from where there hands are pointed using thrusters. This project was completed as part of a few hour long design challenge at Iowa State's VRAC center for creating a movement system. This method was inspired by the Iron Man suit and won first place at the competition.",
					"graphic": "graphics/vrflight.png"
				},
				{
					"name": "Pathway",
					"description": "A video game inspired by the combination between <a href='http://polybridge.drycactus.com/'>Poly Bridge</a> and <a href='https://www.illusionlabs.com/portfolio/labyrinth/'>Labyrinth</a>. The Pathway is for the user to navigate through a series of obstacles using limited tools to help reconstruct their environment. Additionally, Pathway features a custom, in-game level designing tool.",
					"graphic": "graphics/pathway.png"
				},
				{
					"name": "<a href='https://kmkilburg28.itch.io/the-ruins-of-sarcopha-gus' target='_blank'>Ruins of SarcophaGus</a>",
					"description": "Ruins of SarcophaGus is a first-person shooter-esque game where the user is a skeleton trapped at the bottom of their tomb and must escape by clearing and ascedning each floor. This was my first game, and was developed at the Iowa State Game Development Club's Fall 2018 Game Jam. This game jam lasted 48 hours and is where our game won an honorable mention.",
					"graphic": "graphics/ruinsofsarcophagus.png"
				},
				{
					"name": "<a href='https://globalgamejam.org/2019/games/second-chance-0' target='_blank'>2nd Chance</a>",
					"description": "2nd Chance is an isometric 2.5D game where the user plays a newly formed ghost while fighting away evil spirits and investigating their current predicate. This game was completed as challenge to Iowa State Game Development Club's Spring 2019 Game Jam with a time limit of 48 hours.",
					"graphic": "graphics/secondchance.png"
				}
			]
		}
	]
}

const PROJECTS_DIV = document.getElementById('projects');
for (let categoryInd = 0; categoryInd < PROJECTS.categories.length; ++categoryInd) {
	let category = PROJECTS.categories[categoryInd];
	let projects_category = document.createElement('div');
	projects_category.classList.add('projects-category');

	let category_div = document.createElement('div');
	category_div.classList.add('container', 'col-9');
	projects_category.appendChild(category_div);

	let title_div = document.createElement('div');
	title_div.classList.add('row', 'justify-content-center', 'p-2');
	category_div.appendChild(title_div);
	
	let title_heading = document.createElement('h2');
	title_heading.innerText = category.name;
	title_div.appendChild(title_heading);

	for (let projectInd = 0; projectInd < category.projects.length; ++projectInd) {
		let project = category.projects[projectInd];
		let project_div = document.createElement('div');
		project_div.classList.add('row', 'justify-content-center', 'p-2');
		category_div.appendChild(project_div);

		let text_div = document.createElement('div');
		text_div.classList.add('col-5');
		let project_heading = document.createElement('h4');
		project_heading.innerHTML = project.name;
		text_div.appendChild(project_heading);
		let project_description = document.createElement('p');
		project_description.innerHTML = project.description;
		text_div.appendChild(project_description);
		
		let graphic_div = document.createElement('div');
		graphic_div.classList.add('col-7', 'text-center');
		let project_display;
		if (project.graphic.endsWith('.mp4')) {
			project_display = document.createElement('video');
			project_display.classList.add('project-graphic');
			project_display.controls = true;
			project_display.style.maxHeight = "16em";
			source = document.createElement('source');
			source.type = 'video/mp4';
			source.src = project.graphic;
			project_display.appendChild(source);
		}
		else if (project.graphic.includes('youtube')) {
			project_display = document.createElement('iframe');
			project_display.classList.add('project-graphic');
			project_display.src = project.graphic;
			project_display.title = "YouTube video player";
			project_display.frameborder = 0;
			project_display.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
			project_display.allowFullscreen = true;
		}
		else {
			project_display = document.createElement('div');
			project_display.classList.add('project-graphic');
			project_display.classList.add('project-img');
			project_display.alt = project.name + " Image";
			project_display.style.backgroundImage = 'url(' + project.graphic + ')';
		}
		graphic_div.appendChild(project_display);

		let divOrder = projectInd % 2 == 0 ? [graphic_div, text_div] : [text_div, graphic_div];
		for (let i = 0; i < divOrder.length; ++i) {
			project_div.appendChild(divOrder[i]);
		}
	}

	PROJECTS_DIV.appendChild(projects_category);
}