// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "building_outside.jpg",
    levels: {

        start: {
            music: "ambient_horror.mp3",
            message: "You have discovered an abandoned building in the forest.",
            choices: [
                {
                    text: "Enter the building",
                    nextLevel: "cave",
                },

                {
                    text: "Ignore it and move on",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "building_inside.jpg",
            message: "There appears to be a staircase leading upstairs and two open rooms.",
            choices: [
                {
                    text: "Enter the first room",
                    nextLevel: "room1",
                },
                {
                    text: "Enter the second room",
                    nextLevel: "room2",
                },
                {
                    text: "Head upstairs",
                    nextLevel: "upstairs",
                }
            ]
        },

        field: {
            message: "Guess exploring isn't your thing..",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        room1: {
            background_image: "room_1.jpg",
            music: "ambient_horror.mp3",
            message: "There seems to be a hole in the floor.",
            choices: [
                {
                    text: "Enter the hole",
                    nextLevel: "hole",
                },
                {
                    text: "Leave the room",
                    nextLevel: "cave",
                },
            ]
        },
        hole: {
            background_image: "hole_fall.jpg",
            message: "The hole seems to be deeper than you thought, and you broke both of your legs, causing your death..",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },
        room2: {
            background_image: "room_2.jpg",
            music: "ambient_horror.mp3",
            message: "The room seems to be empty.",
            choices: [
                {
                    text: "Do a deep search of the room",
                    nextLevel: "ghost",
                },
                {
                    text: "Leave the room",
                    nextLevel: "cave",
                },
            ]
        },
        ghost: {
            background_image: "ghost.jpg",
            music: "attacked.mp3",
            message: "It seems you have angered a ghost!",
            choices: [
                {
                    text: "Run!!",
                    nextLevel: "escape",
                },
                {
                    text: "Fight It!",
                    nextLevel: "death",
                },
            ]
        },
        escape: {
            message: "You somehow outran the ghost and escaped the building..",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },
        death: {
            background_image: "hole_fall.jpg",
            music: "defeated.mp3",
            message: "How can you fight a ghost? Your body was taken over by it, destroying your soul in the process..",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },
        upstairs: {
            background_image: "cross.jpg",
            message: "You found an old, moldy, wooden cross on the floor.",
            choices: [
                {
                    text: "Take the cross",
                    nextLevel: "cross",
                },
                {
                    text: "Leave it on the floor",
                    nextLevel: "nocross",
                },
            ]
        },
        cross: {
            background_image: "ghost.jpg",
            music: "attacked.mp3",
            message: "A ghost appeared!",
            choices: [
                {
                    text: "Attempt to use the cross",
                    nextLevel: "deadghost",
                },
                {
                    text: "Run!",
                    nextLevel: "escape",
                },
            ]
        },
        deadghost: {
            message: "The ghost was purified and the building, while abandoned, is back to normal now..",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },
        nocross: {
            background_image: "hole_fall.jpg",
            music: "defeated.mp3",
            message: "A ghost appeared and took you by surprise! Your body has been taken over, killing your soul..",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },
    }
};
