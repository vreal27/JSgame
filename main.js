var name = prompt ("Mr. Nice Guy! What's your name?")
console.log(name)

if (name && name !== 'null') {
	var play = confirm(`What's going on, ${name}!? Wanna hang out with Mary Jane?`)

	if (play == true) {
		alert(`Ok ${name}, here's the deal. You're broke as a joke and only got $8.00 to spend on the date. You gotta show MJ a good time but keep it under 8 bucks, baby!`)
	} else {
		alert("Alright, you loser.")
	}

	var firstchoice = prompt("Mary Jane wants to get some food first. You just so happen to meet up in front of a pizza place. You aren't sure how much that'll cost, but you see a park just a block away that's free. What're gonna do!? Type 'walk' to go to the park or 'pizza' get some pizza.")
	if (firstchoice == "walk") {
		alert("Smart move! Let's see how long we can avoid spending this cash!")
	} else if (firstchoice == "pizza"){
		alert("You blew through those 8 bones on the first stop?! What a lame date!")
	}

	

	var secondchoice = prompt("3 hours and 14 miles later... MJ is pretty hungry and you can't avoid food forever! You see the Happy Palace Chinese restaurant to the left, a hot dog stand straight ahead, and a dive bar in an alley to the right. Type left, straight, or right to choose.")

	if (secondchoice == "left") {
		alert("Confucius say: Don't spend all your money on dumplings! DATE OVER!")
	} 

	if (secondchoice == "right"){
		alert("Sort of a sketchy choice, but it looks like MJ is down!")

		if (secondchoice = "right"){
			var alley = prompt("You and MJ walk down the dark alley and run into the guy that shot Batman's parents. He wants your cash! You can either fight him or convince him to take only half. Type: 'fight this clown' or 'split the cash' to choose")
		}

		if (alley == "fight this clown"){
			alert("News Flash! You are not Batman and just got your ass kicked. DATE OVER!")
		} else if (alley == "split the cash"){
			alert("The mugger hears the cops in the distance and decides to take half. Phew, you almost got shot over $8 dollars!? Let's go in the bar, I guess...")
		}

		if (alley == "split the cash"){
			var dbar = prompt("When you guys get in the bar, the hostess asks if you'd prefer to sit at the bar or a table. You noticed a pretty good looking guy eyeing MJ from the bar and giving her the finger guns. You don't want to deal this tool, but the game is on and you can't see it from the table. Type bar or table to choose. ")
		}

		if (dbar == "bar"){
			alert("The second you guys make it to the bar, there's a $13 dollar cocktail waiting for MJ. The guy nods his head over his direction. MJ looks at you to see if you can top his offer. You can't. She walks away and hangs out with homeboy with the finger guns while spend your last 4 bucks on a cranberry vod watching the game. Loser. DATE OVER!")
		} else if (dbar == "table"){
			alert("You guys choose to sit at the table so you follow the hostess through the dining area to where you'll be sitting. Finally time to get some food!")
		}

		if (dbar == "table"){
			var ordertime = prompt("Right as you sit down, you notice that the waitress waiting on your table is an old ex-girlfriend who swore she'd kill you the next time she sees you! You know MJ is hungry and she won't be happy if you guys leave before eating. Type bolt to leave or stay to order food.")
		}

		if (ordertime == "bolt"){
			alert("You grab MJ's wrist and sprint for the door! As you're bolting for the exit, you turn to see if your crazy ex noticed you. The second you turn back to look forward, you smack right into a pillar and get knocked the F out. You look up and see your ex and MJ standing over you. You can see them point mouthing 'what a loser'. DATE OVER! ")
		} else if (ordertime == "stay"){
			alert("You decide to go against your better judgement and just order some food. To your surprise, you find out your ex is doing yoga or meditation or something crap like that, so she's chill AF now and forgot all about being mad! She hands you guys the menus and gives you a 'Namaste'." )
		}

		if (ordertime == "stay"){
			var wing = prompt("You thumb through the menu and realize the only thing you can afford is an order of some boneless buffalo wings for you two to split. Type wings to order some food.")
		}

		if (wing == "wings"){
			alert("You guys finish your order for wings and make your way out of the bar after taking care of the bill. MJ gives you a firm handshake in gratitude for the meal, but not before reminding you that wings are not worth a 14-mile trek and an encounter with a mugger. She informs you that this was the worst date of her life and doesn't ever want to see you again. DATE OVER! ")
		}
	} 

	if (secondchoice == "straight") {
		alert("Cheap and tasty! MJ's isn't too happy with that choice but your wallet is!")
		if(secondchoice == "straight"){
			var hdog = prompt("You guys walk up to the hot dog vendor. He can tell how hungry MJ is and makes the recommendation for a hot dog with the 'works' plus a drink (greedy bastard). Despite that huge meal, MJ brings up how you promised her ice cream and wants to go to her favorite place but it's all the way downtown and you'll need a cab. You know a cheaper, dirtier place just a block way. Type 'downtown' to go to MJ's spot or 'nasty' to go to yours.  ")
		}

		if(hdog == "downtown"){
			alert("You hail a cab to head over to the ice cream spot downtown. The whole time you're thinking of ways to weasel out of tipping the driver!")
		} else if (hdog == "nasty"){
			alert("MJ reluctantly agrees to going to your spot instead (even though you promised, loser). When you get to the bad neighborhood where this 'ice cream' place is located, you see a stray dog squatting by the door pooping. It looks a lot like chocolate soft serve. MJ lost her appetite for ice cream. DATE OVER!")
		}

		if(hdog == "downtown"){
			var cab = prompt("When you guys get to the MJ's favorite ice cream place, you reluctantly give the cabbie $7.75 of your $8. He still yells at you to get out for not tipping. MJ doesn't know you just have a quarter left and to make matters worse, a homeless guy walks up to you and asks for money. You're already stressing about trying to make this work but you don't want to look bad in front of MJ. You also notice that this dude's got a few bills in his cup... Type 'steal' to take some money, 'give' to give him your last quarter, or 'yell' to tell him to go away.")
		}

		if(cab == "steal"){
			alert("In a real sly way, you pretend to drop your last quarter in his cup but grab a few bucks when you pull back your hand! You're back up $3.43, baby! ")
		} else if (cab == "give"){
			alert("You give this guy your last quarter (like it would have made a difference, anyway). MJ is ready to go inside and get some sweeeet ice cream, but you have to explain how your broke ass only had one quarter left. While she thinks it sweet that you gave your quarter to that homeless guy, she thinks ice cream would have been a little sweeter. DATE OVER! ")
		} else if ( cab == "yell"){
			alert("With just one quarter left in your pocket and this guy asking for money, you snap and yell at him! You tell him that you're poorer than he is and HE should be giving you some cash! MJ is straight up apalled and thinks you're loser who yells at homeless guys for fun. DATE OVER!")
		}

		if(cab == "steal"){
			var win = alert("You guys a banana split sundae and have a great time! You did it, dawg. You made good on your promise for ice cream and even bought lunch. MJ's super happy and wants to plan another date! Now you just gotta whip up another 8 bucks...")
		}
	}

	
} else {
	alert("Oh you don't want to play?")
}