<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css">

<script>	
	import { Clock }from "./clock"
	import { fly,fade,slide,draw } from "svelte/transition"
	import { onMount } from 'svelte';
	import { text } from "svelte/internal";

	/* Variable for the SVG clock */
	let rightClockHour = 0
	let rightClockMin = 0
	/* SVG clock anchor point*/
	let time = new Date();

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = rightClockHour
	$: minutes = rightClockMin

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	/* Initial clock display when first loading up the site */
	let leftClockDisplay = 0
	let rightClockDisplay = 0
	let middleClockDisplay = 0
	/* Clock time turned to string from int */
	let clockStringLeft = ""
	let clockStringMiddle = ""
	let clockStringRight = ""
	/* Start Valueon the clock */
	let startHour = 20
	let startMin = 50
	/* Clock anchor point */
	let clockLocal = new Clock(startHour,startMin)	
	let clockGMT = new Clock((startHour-1),startMin)
	let clockEST = new Clock((startHour-6),startMin)
	/* Variable to set time to specific string */
	let setLarmRight = ""
	let setLarmMiddle = ""
	let setLarmLeft = ""
	/* Bool for the larm  */
	let larmRight = false
	let larmMiddle = false
	let larmLeft = false
	/* Diffrent time zone for each clock*/
	let timeZoneLeft =""
	let timeZoneMiddle = ""
	let timeZoneRight = ""
	/*  Bool to indicate when to show what alarm time is set to*/
	let showerMiddle = false
	let showerLeft = false
	let showerRight = false
	/* Left hour and min  */
	let leftHour = "24"
	let leftMin = ""
	let leftClockHourRect = ""
	let leftClockMinRect = ""

	/* Checks what time zone is active  */
	function timeZoneChecker() { 
		timeZoneRight = document.getElementById("timeZonesRight").value	
		timeZoneLeft = document.getElementById("timeZonesLeft").value
		timeZoneMiddle = document.getElementById("timeZonesMiddle").value
	}
	/* Sets the time of the alarm */
	function alarmSetterRight() {
		setLarmRight = document.getElementById("DisablerRight").value
		showerRight = true 
	} 
	function alarmSetterLeft() {
		setLarmLeft = document.getElementById("DisablerLeft").value
		showerLeft = true		 
	} 
	function alarmSetterMiddle() {
		setLarmMiddle = document.getElementById("DisablerMiddle").value
		showerMiddle = true
	}
	/* Disables the alarm */
	function alarmDisablerMiddle() {
		larmMiddle = false
		showerMiddle = false
	}
	function alarmDisablerLeft() {
		larmLeft = false
		showerLeft = false
	}
	function alarmDisablerRight() {
		larmRight = false
		showerRight =false
	}
	/* Checks if the current time is equal to the set alarm time OBS!! bug where larm is set to true when starting the web page */
	function matchCheck() {
		if (clockStringMiddle == setLarmMiddle && showerMiddle) {
			larmMiddle = true
		}
		if (clockStringLeft == setLarmLeft && showerLeft) {
			larmLeft = true
		}
		if (clockStringRight == setLarmRight && showerRight) {
			larmRight = true
		}
	}
	/* Updates time and sets the clock display to each time zone depending which time zone is active */
	function updateTime() {
		clockLocal.tick()
		clockGMT.tick()
		clockEST.tick()
		leftClockHourRect = -225 + 9.5833333333333333333333333333333 * leftHour
		leftClockMinRect = -225 + 3.75 * leftMin
	}
	
	/* Sets the time for each diffrent clock depending on what time zone is set in the browser */
	function timeZoneLeftClock() {
		if (timeZoneLeft == "localTime") {
			leftClockDisplay = clockLocal.time
			leftHour = clockLocal._hour
			leftMin = clockLocal._min
		}		
		else if (timeZoneLeft == "GMT") {
			leftClockDisplay = clockGMT.time
			leftHour = clockGMT._hour
			leftMin = clockGMT._min
		}
		else if (timeZoneLeft = "EST") {
			leftClockDisplay = clockEST.time
			leftHour = clockEST._hour
			leftMin = clockEST._min
		}
		clockStringLeft = leftClockDisplay.toString()
	}
	function timeZoneMiddleClock() {
		if (timeZoneMiddle == "localTime") {
			middleClockDisplay = clockLocal.time
		}		
		else if (timeZoneMiddle == "GMT") {
			middleClockDisplay = clockGMT.time
		}
		else if (timeZoneMiddle = "EST") {
			middleClockDisplay = clockEST.time
		}
		clockStringMiddle = middleClockDisplay.toString()
	}
	function timeZoneRightClock() {
		clockStringRight = rightClockDisplay.toString()

		if (timeZoneRight == "localTime") {
			rightClockDisplay = clockLocal.time
			rightClockHour = clockLocal._hour
			rightClockMin = clockLocal._min
		}		
		else if (timeZoneRight == "GMT") {
			rightClockDisplay = clockGMT.time
			rightClockHour = clockGMT._hour
			rightClockMin = clockGMT._min
		}
		else if (timeZoneRight = "EST") {
			rightClockDisplay = clockEST.time
			rightClockHour = clockEST._hour
			rightClockMin = clockEST._min
		}
	}

	/* Interval function callers */
	setInterval(matchCheck, 1000)
	setInterval(updateTime, 1000)	
	setInterval(timeZoneChecker, 250)
	setInterval(timeZoneMiddleClock, 500)
	setInterval(timeZoneLeftClock, 500)
	setInterval(timeZoneRightClock, 500)
	
</script>



<main>

	
	<!-- Top of the page -->
	<div id="top">
		<h1 id="mainTitle">
			time:viewer
		</h1>	
	</div>	
		
	<div class="flexcontainer">
		<!-- Left clock -->
		<div class="clockcontainer">
			<!-- Svelte if statement to show what alarm time has been set-->
			{#if showerLeft && setLarmLeft != 0}
			<p id="titleAlarm" in:fly="{{ y: -50}}"> Alarm set to {setLarmLeft}</p>
			{:else}
			<p></p>
			{/if}
			<div class="leftTimerContainer">
				<svg>
					<rect id=leftHourTimer x={leftClockHourRect} rx =10 ry=10 y=10></rect>
					<rect id=leftMinTimer x={leftClockMinRect} rx=10 ry=10 y=70></rect>
				</svg>		
				<div id="leftClockDivDis">
					<p id="leftClockHourDis">{leftHour}</p>
					<p id="leftClockMinDis">{leftMin}</p>
				</div>				
			  </div>
			<!-- the alarm-->
			{#if larmLeft}
  			<p id="larm" in:fly="{{ y: -50}}">alarm</p>
			{:else}
  			<p></p>
			{/if}
			<!-- Form to determent which time zone is active-->
			<div>
				<input class="button" type="time" id="DisablerLeft">
				<form style="display: inline;">
					<select style="" id="timeZonesLeft" name="Time Zones">
						<option value="localTime">Local Time</option>
						<option value="GMT">GMT</option>
						<option value="EST">EST</option>
					</select>
				</form>
			</div>

			<!-- Button for setting alarm-->
			<div id="setter">
				{#if larmLeft == false && showerLeft != true}
					<button class="setter" on:click={alarmSetterLeft}>Click me to set alarm</button>
				{:else if showerLeft == true}
					<button class="setter" on:click={alarmDisablerLeft}>Click Me to Disable Alarm</button>	
				{/if}	
			</div>
			<button id="button" on:click={updateTime}>
				Press to update time
			</button>			
		</div>

		<!-- Middle clock -->
		<div class="clockcontainer">
				<!-- Svelte if statement to show what alarm time has been set-->
			{#if showerMiddle && setLarmMiddle != 0}
			<p id="titleAlarm" in:fly="{{ y: -50}}"> Alarm set to {setLarmMiddle}</p>
			{:else}
			<p></p>
			{/if}
			<!-- The active time of the clock-->
			<p id="time">
				{middleClockDisplay}
			</p>
			<!-- the alarm-->
			{#if larmMiddle}
  			<p id="larm" in:fly="{{ y: -50}}">alarm</p>
			{:else}
  			<p></p>
			{/if}
			<!-- Form to determent which time zone is active -->
			<div>
				<input class="button" type="time" id="DisablerMiddle">
				<form style="display: inline;">
					<select id="timeZonesMiddle" name="Time Zones">
						<option value="localTime">Local Time</option>
						<option value="GMT">GMT</option>
						<option value="EST">EST</option>
					</select>
				</form>
			</div>
			<!-- Button for setting alarm-->
			<div id="setter">
				{#if larmMiddle == false && showerMiddle != true}
					<button class="setter" on:click={alarmSetterMiddle}>Click me to set alarm</button>
				{:else if showerMiddle == true}
					<button class="setter" on:click={alarmDisablerMiddle}>Click Me to Disable Alarm</button>	
				{/if}	
			</div>
			<button id="button" on:click={updateTime}>
				Press to update time
			</button>			
		</div>

		<!-- Right Clock -->
		<div class="clockcontainer">
				<!-- Svelte if statement to show what alarm time has been set-->
			{#if showerRight && setLarmRight != 0}
			<p id="titleAlarm" in:fly="{{ y: -50}}"> Alarm set to {setLarmRight}</p>
			{:else}
			<p></p>
			{/if}
			<!-- inspired by svelte clock-->
			<svg id="circleClock" viewBox='-50 -50 100 100'>
				<circle class='clock-face' r='48'/>			
				<!-- markers -->
				{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
					<line
						class='major'
						y1='35'
						y2='45'
						transform='rotate({30 * minute})'
					/>			
					{#each [1, 2, 3, 4] as offset}
						<line
							class='minor'
							y1='42'
							y2='45'
							transform='rotate({6 * (minute + offset)})'
						/>
					{/each}
				{/each}			
				<!-- hour hand -->
				<line
					class='hour'
					y1='2'
					y2='-20'
					transform='rotate({30 * hours + minutes / 2})'
				/>			
				<!-- minute hand -->
				<line
					class='minute'
					y1='4'
					y2='-30'
					transform='rotate({6 * minutes})'
				/>				
			</svg>
			<!-- the alarm-->
			{#if larmRight}
  			<p id="larmRight" in:fly="{{ y: -50}}">alarm</p>
			{:else}
  			<p></p>
			{/if}
			<!-- Form to determent which time zone is active-->
			<div>
				<input class="button" type="time" id="DisablerRight">
				<form style="display: inline">
					<select  id="timeZonesRight" name="Time Zones">
						<option value="localTime">Local Time</option>
						<option value="GMT">GMT</option>
						<option value="EST">EST</option>
					</select>
				</form>
			</div>
			<!-- Button for setting alarm-->
			<div>
				{#if larmRight == false && showerRight != true}
					<button class="setter" on:click={alarmSetterRight}>Click me to set alarm</button>
				{:else if showerRight == true}
					<button class="setter" on:click={alarmDisablerRight}>Click Me to Disable Alarm</button>	
				{/if}	
			</div>
			<button id="button" on:click={updateTime}>
				Press to update time
			</button>			
		</div>
	</div>
</main>

<style>
	:global(body) { /* CSS for the background */
		background-color: #3E065F;
	}
	 /* CSS to make the screen different depending on the resolution of the webpage */
	@media only screen and (max-width: 600px) {


		.flexcontainer {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}

	/* CSS to align the main part of the page to center */
	.flexcontainer{ 
		display: flex;	
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 10px;
		text-align: center;				
	}

	.flexcontainer > .clockcontainer{ /* CSS to easier customize the main part of the page*/
		background-color: #4C0070;		
		border-radius: 20px;
		border-style: solid;
		border-color: #160040;
		padding-left: 70px;
		padding-right: 70px;
		box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.25);
		max-width: 250px;
		justify-content: center;
		max-height: 100%;
		
	}

	/* Changes the background color when hovering over */
	.clockcontainer:hover {
		background-color: #5d0088;
	}

	 /* CSS for the disable/enable alarm button  */
	.setter {
		color: black;
		background-color: #700B97;
		font-size: 20px;
		font-family: Lobster;
		border-style: solid;
		border-color: #160040;
		border-radius: 15px;
		cursor: pointer;
	}

	/* CSS when hovering over */
	.setter:hover {
		background-color: violet;
	}

	/* CSS for the class button */
	.button {
		cursor: pointer;
		color: black;
		background-color: #700B97;
		border-color: #160040;
		border-radius: 15px;
		font-family: lobster;
		font-size: 20px;
	}

	/* CSS for left clocks background behind the process bars */
	.leftTimerContainer {
		margin-top: 100px;
		margin-bottom: 100px;
		padding-top: 25px;
		height: 100px;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom: 25px;
		display:flex;
		flex-direction: row;
		background-color: #700B97;
		border-radius: 20px;
		border-style: groove;
		border-color: #160040;
	}

	/* CSS for the clock bar on left clock's hour */
	#leftHourTimer {		
		fill: orange;
		border-style: groove;
		stroke-width: 2px;
		stroke: #160040;
		width: 225px;
		height: 20px;
	}

	/* CSS for the clock bar on left clock's min*/
	#leftMinTimer {
		fill: orchid;
		stroke: #160040;
		stroke-width: 2px;		
		width: 225px;
		height: 20px;
		
	}
	#leftClockDivDis {
		width: 1px;
		height: 10px;
	}

	/* Clock Dislay for Min on Left clock	 */
	#leftClockMinDis {
		color: white;
		position: relative;
		right: 115px;
		top: 13px;
		display: block;
	}

	/* Clock Display for Hour on Left clock */
	#leftClockHourDis {
		display: block;
		color: white;
		position: relative;
		right: 115px;
		bottom: 9px;
		
	}

	/* css for the form for time zone */
	select {
		border-radius: 15px;
		background-color: #700B97;
		border-color: #160040;
		font-size: 20px;
		font-family: lobster;
		display: inline;
		cursor: pointer;
	}

	/* CSS for when hovering over the time zone form */
	select:hover {
		background-color: violet;
	}

	/* CSS for when hovering over time setting button */
	input[type=time]:hover {
		background-color: violet;
	
	}

	#button { /* CSS for the time update button */
		color: black;
		background-color: #700B97;
		font-size: 25px;
		font-family: Lobster;
		border-style: solid;
		border-color: #160040;
		border-radius: 15px;
		cursor: pointer;
		
	}

	/* Css for when hovering over press update time */
	#button:hover {
		background-color: violet;
	}

	#larm { /* CSS for the alarm */
		font-size: 30px;
		color: aliceblue;		
		font-family: monospace;
		text-decoration: underline;	
					
	}

	#larmRight { /* CSS for the alarm on right side*/
		font-size: 30px;
		color: aliceblue;		
		font-family: monospace;
		text-decoration: underline;	
		margin-top: 10px;
		height: 37px;					
	}
	/* CSS for the bar behind the title */
	#top {		
		background-color: #1F1D36;
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	/* CSS for the alarm  */
	#titleAlarm {
		color: #FFAB4C;
		font-family: monospace;
		text-align: center;
		font-size: 20px;
		position:relative;
		top: 50px;
	}	

	 /* CSS for the title */
	#mainTitle {
		font-size: 4em;
		color: orange;
		font-family: monospace;
		text-align: center;
		font-weight: lighter;
		text-transform: uppercase;		
	}   

	#time { /* CSS for the area around the clock and it's font */
		padding-left: 10px;
		padding-right: 10px;
		font-size: xx-large;		
		font-family: Anton;
		font-size: 100px;
		font-weight: lighter;
		color: #FFAB4C;	
		border-style:groove;
		border-color: #160040;
		border-radius: 15px;
		background: linear-gradient(-45deg,green, #e73c7e, #23a6d5, #23d5ab);
		animation: gradient 1.5s linear infinite;
	}

	/* Animation of background on digital clock*/
	@keyframes gradient {
       100% {
		   filter: hue-rotate(360deg);
	   }
	}

	/* CSS for the svg clock */
	#circleClock {
		padding-top: 40%;
		position: relative;
		bottom: 15px;	
	}

	.clock-face {
		stroke: #160040;
		fill: #79018C;
	}

	.minor {
		stroke: #999;
		stroke-width: 0.5;
	}

	.major {
		stroke: #FFAB4C;
		stroke-width: 1;
	}

	.hour {
		stroke: #333;
	}

	.minute {
		stroke: #666;
	}
	</style>