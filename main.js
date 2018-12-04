var name = prompt ("Mr. Nice Guy! What's your name?")

if (name) {
var play = confirm(`What's going on, ${name}!? Wanna hang out with Mary Jane?`)
}

if (play == true) {
	alert(`Ok ${name}, here's the deal. You're broke as a joke and only got $8.00 to spend on the date. You gotta show MJ a good time but keep it under 8 bucks, baby!`)
} else {
	alert("Alright, you loser.");System.exit(0);
}

var firstchoice = alert("MJ ready to go. What should you do first? Choices: Go for a walk or get some pizza?")

var answer1 = confirm("Get some pizza?")

if (answer1) {
	alert("You blew through those 8 bones on the first stop?! What a lame date!"); System.exit(0);
} else {
	alert("Smart move! Let's see how long we can avoid spending this cash!")
}

var secondchoice = prompt("3 hours and 14 miles later... MJ is pretty hungry and you can't avoid food forever! You see the Happy Palace Chinese restaurant to the left, a hot dog stand straight ahead, and a dive bar in an alley to the right. Type left, straight, or right to choose.")

if (secondchoice == "left") {
	alert("Confucius say: Don't spend all your money on dumplings! DATE OVER!"); System.exit(0);
} else if (secondchoice == "right"){
	alert("Sort of a sketchy choice, but it looks like MJ is down!")
} else if (secondchoice == "straight") {
	alert("Cheap and tasty! MJ's isn't too happy with that choice but your wallet is!")
}

if(secondchoice = "right"){
	var alley = prompt("You and MJ walk down the dark alley and run into the guy that shot Batman's parents. He wants your cash! You can either fight him or convince him to take only half. Type: 'fight this clown' or 'split the cash' to choose")
}

if (alley == "fight this clown"){
	alert("News Flash! You are not Batman and just got your ass kicked. DATE OVER!"); System.exit(0);
} else if (alley == "split the cash"){
	alert("The mugger hears the cops in the distance and decides to take half. Phew, you almost got shot over $8 dollars!? Let's go in the bar, I guess...")
}

if (alley == "split the cash"){
	var dbar = prompt("When you guys get in the bar, the hostess as if you'd prefer to sit at the bar or a table. You noticed a pretty good looking guy eyeing MJ from the bar and giving her the finger guns. You are already not about sitting there with this tool, but the game is on and you can't see it from the table. Type bar or table to choose. ")
}

if (dbar == "bar"){
	alert("The second you guys make it to the bar, there's a $13 dollar cocktail waiting for MJ. The guy nods his head over his direction. MJ looks at you to see if you can top his offer. You can't. She walks away and hangs out with homeboy with the finger guns while you drink a cranberry vod watching the game. Loser. DATE OVER!"); System.exit(0);
} else if (dbar == "table"){
	alert("You guys choose to sit at the table so follow the hostess through the dining area to where you'll be sitting. Finally time to get some food!")
}

if (dbar == "table"){
	var ordertime = prompt("Right as you sit down, you notice that the waitress waiting on your table is an old ex-girlfriend who swore she'd kill you the next time she sees you! You know MJ is hungry and she won't be happy if you guys leave before eating. Type bolt to leave or stay to order food.")
}

if (ordertime == "bolt"){
	alert("You grab MJ's wrist and sprint for the door! As you're bolting for the exit, you turn to see if your crazy ex noticed you. The second you turn back to look forward, you smack right into a pillar and get knocked the F out. You look up and see your ex and MJ standing over you. You can see them point mouthing 'what a loser'. DATE OVER! "); System.exit(0);
} else if (ordertime == "stay"){
	alert("You decide to go against your better judgement and just order some food. To your surprise, you find out your ex is doing yoga or meditation or something crap like that, so she's chill AF now and forgot all about being mad! She hands you guys the menus and gives you a 'Namaste'." )
}

if (ordertime == "stay"){
	var wing = prompt("You thumb through the menu and realize the only thing you can afford is an order of some boneless buffalo wings for you two to split. Type wings to order some food.")
}

if (wing == "wings"){
	alert("You guys finish your order for wings and make your way out of the bar after taking care of the bill. MJ gives you a firm handshake in gratitude for the meal, but not before reminding you that wings are not worth a 14-mile trek and an encounter with a mugger. She informs you that this was the worst date of her life and doesn't ever want to see you again. DATE OVER! ")
}


