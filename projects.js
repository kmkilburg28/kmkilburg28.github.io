const PROJECTS = {
	"categories": [
		{
			"name": "Artificial Intelligence",
			"projects": [
				{
					"name": "<a href='https://github.com/kmkilburg28/MultiAgentSurvival'>Multi-agent Survival Game</a>",
					"description": "Info",
					"graphic": "graphics/multiagentsurvival.mp4"
				},
				{
					"name": "<a href='https://github.com/kmkilburg28/NBA_Predictions'>NBA Predictions</a>",
					"description": "Info",
					"graphic": "graphics/nba_predictions.png"
				},
				{
					"name": "<a href='Checkers/'>Checkers AI</a>",
					"description": "Info",
					"graphic": "graphics/checkers.png"
				},
				{
					"name": "<a href='KerasClone/'>Keras Clone</a>",
					"description": "Info",
					"graphic": "graphics/kerasclone.png"
				},
				{
					"name": "Student Major Predictor",
					"description": "Info",
					"graphic": "graphics/majorpredictor.png"
				}
			]
		},
		{
			"name": "Computer Vision",
			"projects": [
				{
					"name": "<a href='IntonationLearner/'>In-Tone Nation</a>",
					"description": "Info",
					"graphic": "graphics/intone_nation.png"
				},
				{
					"name": "<a href='BackgammonImageProcessing/'>Backgammon Image Processing</a>",
					"description": "Info",
					"graphic": "graphics/backgammon.png"
				},
				{
					"name": "<a href='AudioProcessing/'>Audo Processing with FFT</a>",
					"description": "Info",
					"graphic": "graphics/audioprocessing.png"
				},
				{
					"name": "<a href='PatternProcessing/'>Puzzle Pattern Processing</a>",
					"description": "Info",
					"graphic": "graphics/patternprocessing.png"
				}
			]
		},
		{
			"name": "Web Development",
			"projects": [
				{
					"name": "<a href='WebGL/lib/'>WebGL Project</a>",
					"description": "Info",
					"graphic": "graphics/webgl.mp4"
				},
				{
					"name": "<a href='snake/'>Snake Game</a>",
					"description": "Info",
					"graphic": "graphics/snake.png"
				},
				{
					"name": "CyBuzz",
					"description": "Info",
					"graphic": "graphics/cybuzz.png"
				},
				{
					"name": "Canvas Utility",
					"description": "Info",
					"graphic": "graphics/canvasutility.mp4"
				},
				{
					"name": "<a href='https://youtu.be/cxlqhyEJrZc'>Rudiments Android App Web Server</a>",
					"description": "Info",
					"graphic": "https://www.youtube.com/embed/cxlqhyEJrZc"
				}
			]
		},
		{
			"name": "Unity",
			"projects": [
				{
					"name": "VR Flight Movement",
					"description": "Info",
					"graphic": "graphics/vrflight.png"
				},
				{
					"name": "Pathway",
					"description": "Info",
					"graphic": "graphics/pathway.png"
				},
				{
					"name": "<a href='https://kmkilburg28.itch.io/the-ruins-of-sarcopha-gus' target='_blank'>Ruins of SarcophaGus</a>",
					"description": "Info",
					"graphic": "graphics/ruinsofsarcophagus.png"
				},
				{
					"name": "<a href='https://globalgamejam.org/2019/games/second-chance-0' target='_blank'>2nd Chance</a>",
					"description": "Info",
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
		project_description.innerText = project.description;
		text_div.appendChild(project_description);
		
		let graphic_div = document.createElement('div');
		graphic_div.classList.add('col-7', 'text-center');
		let project_display;
		if (project.graphic.endsWith('.mp4')) {
			project_display = document.createElement('video');
			project_display.controls = true;
			project_display.style.width = "100%";
			project_display.style.maxHeight = "16em";
			source = document.createElement('source');
			source.type = 'video/mp4';
			source.src = project.graphic;
			project_display.appendChild(source);
		}
		else if (project.graphic.includes('youtube')) {
			project_display = document.createElement('iframe');
			project_display.src = project.graphic;
			project_display.title = "YouTube video player";
			project_display.frameborder = 0;
			project_display.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
			project_display.allowFullscreen = true;
			project_display.style.width = "100%";
		}
		else {
			project_display = document.createElement('img');
			project_display.classList.add('img-fluid');
			project_display.alt = project.name + " Image";
			project_display.src = project.graphic;
		}
		graphic_div.appendChild(project_display);

		let divOrder = projectInd % 2 == 0 ? [graphic_div, text_div] : [text_div, graphic_div];
		for (let i = 0; i < divOrder.length; ++i) {
			project_div.appendChild(divOrder[i]);
		}
	}

	PROJECTS_DIV.appendChild(projects_category);
}