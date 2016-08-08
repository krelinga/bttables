/*
MIT License

Copyright (c) 2016 Andy Kreling

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function RollOneDie() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
}

var data = {
    "Determining Critical Hits Table": {
        2: "No Critical Hit",
        3: "No Critical Hit",
        4: "No Critical Hit",
        5: "No Critical Hit",
        6: "No Critical Hit",
        7: "No Critical Hit",
        8: "Roll 1 Critical Hit Location",
        9: "Roll 1 Critical Hit Location",
        10: "Roll 2 Critical Hit Locations",
        11: "Roll 2 Critical Hit Locations",
        12: "Head/Limb Blown Off, Roll 3 Critical Hit Locations*",
    },
    "'Mech Punch Location Table": {
        "Left Side": {
            "Biped": {
                1: "Left Torso",
                2: "Left Torso",
                3: "Center Torso",
                4: "Left Arm",
                5: "Left Arm",
                6: "Head"
            },
            "Four-Legged": {
                1: "Left Torso",
                2: "Left Torso",
                3: "Center Torso",
                4: "Left Front Leg",
                5: "Left Rear Leg",
                6: "Head"
            }
        },
        "Front/Rear": {
            "Biped": {
                1: "Left Arm",
                2: "Left Torso",
                3: "Center Torso",
                4: "Right Torso",
                5: "Right Arm",
                6: "Head"
            },
            "Four-Legged": {
                1: "Left Front Leg/Left Rear Leg",
                2: "Left Torso",
                3: "Center Torso",
                4: "Right Torso",
                5: "Right Front Leg/Right Rear Leg",
                6: "Head"
            }
        },
        "Right Side": {
            "Biped": {
                1: "Right Torso",
                2: "Right Torso",
                3: "Center Torso",
                4: "Right Arm",
                5: "Right Arm",
                6: "Head"
            },
            "Four-Legged": {
                1: "Right Torso",
                2: "Right Torso",
                3: "Center Torso",
                4: "Right Front Leg",
                5: "Right Rear Leg",
                6: "Head"
            }
        }
    },
    "'Mech Kick Location Table": {
        "Left Side": {
            "Biped": {
                1: "Left Leg",
                2: "Left Leg",
                3: "Left Leg",
                4: "Left Leg",
                5: "Left Leg",
                6: "Left Leg"
            },
            "Four Legged": {
                1: "Left Front Leg",
                2: "Left Front Leg",
                3: "Left Front Leg",
                4: "Left Rear Leg",
                5: "Left Rear Leg",
                6: "Left Rear Leg"
            }
        },
        "Front/Rear": {
            "Biped": {
                1: "Right Leg",
                2: "Right Leg",
                3: "Right Leg",
                4: "Left Leg",
                5: "Left Leg",
                6: "Left Leg"
            },
            "Four Legged": {
                1: "Right Front Leg/Right Rear Leg",
                2: "Right Front Leg/Right Rear Leg",
                3: "Right Front Leg/Right Rear Leg",
                4: "Left Front Leg/Left Rear Leg",
                5: "Left Front Leg/Left Rear Leg",
                6: "Left Front Leg/Left Rear Leg"
            }
        },
        "Right Side": {
            "Biped": {
                1: "Right Leg",
                2: "Right Leg",
                3: "Right Leg",
                4: "Right Leg",
                5: "Right Leg",
                6: "Right Leg"
            },
            "Four Legged": {
                1: "Right Front Leg",
                2: "Right Front Leg",
                3: "Right Front Leg",
                4: "Right Rear Leg",
                5: "Right Rear Leg",
                6: "Right Rear Leg"
            }
        }
    },
    "'Mech Hit Location Table": {
        "Left Side": {
            "Biped": {
                2: "Left Torso [critical]",
                3: "Left Leg",
                4: "Left Arm",
                5: "Left Arm",
                6: "Left Leg",
                7: "Left Torso",
                8: "Center Torso",
                9: "Right Torso",
                10: "Right Arm",
                11: "Right Leg",
                12: "Head"
            },
            "Four Legged": {
                2: "Left Torso [critical]",
                3: "Left Rear Leg",
                4: "Left Front Leg",
                5: "Left Front Leg",
                6: "Left Rear Leg",
                7: "Left Torso",
                8: "Center Torso",
                9: "Right Torso",
                10: "Right Front Leg",
                11: "Right Rear Leg",
                12: "Head"
            }
        },
        "Front/Rear": {
            "Biped": {
                2: "Center Torso [critical]",
                3: "Right Arm",
                4: "Right Arm",
                5: "Right Leg",
                6: "Right Torso",
                7: "Center Torso",
                8: "Left Torso",
                9: "Left Leg",
                10: "Left Arm",
                11: "Left Arm",
                12: "Head"
            },
            "Four Legged": {
                2: "Center Torso [critical]",
                3: "Right Front Leg",
                4: "Right Front Leg",
                5: "Right Rear Leg",
                6: "Right Torso",
                7: "Center Torso",
                8: "Left Torso",
                9: "Left Rear Leg",
                10: "Left Front Leg",
                11: "Left Front Leg",
                12: "Head"
            }
        },
        "Right Side": {
            "Biped": {
                2: "Right Torso [critical]",
                3: "Right Leg",
                4: "Right Arm",
                5: "Right Arm",
                6: "Right Leg",
                7: "Right Torso",
                8: "Center Torso",
                9: "Left Torso",
                10: "Left Arm",
                11: "Left Leg",
                12: "Head"
            },
            "Four Legged": {
                2: "Right Torso [critical]",
                3: "Right Rear Leg",
                4: "Right Front Leg",
                5: "Right Front Leg",
                6: "Right Rear Leg",
                7: "Right Torso",
                8: "Center Torso",
                9: "Left Torso",
                10: "Left Front Leg",
                11: "Left Rear Leg",
                12: "Head"
            }
        }
    },
    "Cluster Hits Table": {
        2: {
            2: 1,
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 2,
            9: 2,
            10: 2,
            11: 2,
            12: 2
        },
        3: {
            2: 1,
            3: 1,
            4: 1,
            5: 2,
            6: 2,
            7: 2,
            8: 2,
            9: 2,
            10: 3,
            11: 3,
            12: 3
        },
        4: {
            2: 1,
            3: 2,
            4: 2,
            5: 2,
            6: 2,
            7: 3,
            8: 3,
            9: 3,
            10: 3,
            11: 4,
            12: 4
        },
        5: {
            2: 1,
            3: 2,
            4: 2,
            5: 3,
            6: 3,
            7: 3,
            8: 3,
            9: 4,
            10: 4,
            11: 5,
            12: 5
        },
        6: {
            2: 2,
            3: 2,
            4: 3,
            5: 3,
            6: 4,
            7: 4,
            8: 4,
            9: 5,
            10: 5,
            11: 6,
            12: 6
        },
        7: {
            2: 2,
            3: 2,
            4: 3,
            5: 4,
            6: 4,
            7: 4,
            8: 4,
            9: 6,
            10: 6,
            11: 7,
            12: 7
        },
        8: {
            2: 3,
            3: 3,
            4: 4,
            5: 4,
            6: 5,
            7: 5,
            8: 5,
            9: 6,
            10: 6,
            11: 8,
            12: 8
        },
        9: {
            2: 3,
            3: 3,
            4: 4,
            5: 5,
            6: 5,
            7: 5,
            8: 5,
            9: 7,
            10: 7,
            11: 9,
            12: 9
        },
        10: {
            2: 3,
            3: 3,
            4: 4,
            5: 6,
            6: 6,
            7: 6,
            8: 6,
            9: 8,
            10: 8,
            11: 10,
            12: 10
        },
        11: {
            2: 4,
            3: 4,
            4: 5,
            5: 7,
            6: 7,
            7: 7,
            8: 7,
            9: 9,
            10: 9,
            11: 11,
            12: 11
        },
        12: {
            2: 4,
            3: 4,
            4: 5,
            5: 8,
            6: 8,
            7: 8,
            8: 8,
            9: 10,
            10: 10,
            11: 12,
            12: 12
        },
        13: {
            2: 4,
            3: 4,
            4: 5,
            5: 8,
            6: 8,
            7: 8,
            8: 8,
            9: 11,
            10: 11,
            11: 13,
            12: 13
        },
        14: {
            2: 5,
            3: 5,
            4: 6,
            5: 9,
            6: 9,
            7: 9,
            8: 9,
            9: 11,
            10: 11,
            11: 14,
            12: 14
        },
        15: {
            2: 5,
            3: 5,
            4: 6,
            5: 9,
            6: 9,
            7: 9,
            8: 9,
            9: 12,
            10: 12,
            11: 15,
            12: 15
        },
        16: {
            2: 5,
            3: 5,
            4: 7,
            5: 10,
            6: 10,
            7: 10,
            8: 10,
            9: 13,
            10: 13,
            11: 16,
            12: 16
        },
        17: {
            2: 5,
            3: 5,
            4: 7,
            5: 10,
            6: 10,
            7: 10,
            8: 10,
            9: 14,
            10: 14,
            11: 17,
            12: 17
        },
        18: {
            2: 6,
            3: 6,
            4: 8,
            5: 11,
            6: 11,
            7: 11,
            8: 11,
            9: 14,
            10: 14,
            11: 18,
            12: 18
        },
        19: {
            2: 6,
            3: 6,
            4: 8,
            5: 11,
            6: 11,
            7: 11,
            8: 11,
            9: 15,
            10: 15,
            11: 19,
            12: 19
        },
        20: {
            2: 6,
            3: 6,
            4: 9,
            5: 12,
            6: 12,
            7: 12,
            8: 12,
            9: 16,
            10: 16,
            11: 20,
            12: 20
        },
        21: {
            2: 7,
            3: 7,
            4: 9,
            5: 13,
            6: 13,
            7: 13,
            8: 13,
            9: 17,
            10: 17,
            11: 21,
            12: 21
        },
        22: {
            2: 7,
            3: 7,
            4: 9,
            5: 14,
            6: 14,
            7: 14,
            8: 14,
            9: 18,
            10: 18,
            11: 22,
            12: 22
        },
        23: {
            2: 7,
            3: 7,
            4: 10,
            5: 15,
            6: 15,
            7: 15,
            8: 15,
            9: 19,
            10: 19,
            11: 23,
            12: 23
        },
        24: {
            2: 8,
            3: 8,
            4: 10,
            5: 16,
            6: 16,
            7: 16,
            8: 16,
            9: 20,
            10: 20,
            11: 24,
            12: 24
        },
        25: {
            2: 8,
            3: 8,
            4: 10,
            5: 16,
            6: 16,
            7: 16,
            8: 16,
            9: 21,
            10: 21,
            11: 26,
            12: 26
        },
        26: {
            2: 9,
            3: 9,
            4: 11,
            5: 17,
            6: 17,
            7: 17,
            8: 17,
            9: 21,
            10: 21,
            11: 26,
            12: 26
        },
        27: {
            2: 9,
            3: 9,
            4: 11,
            5: 17,
            6: 17,
            7: 17,
            8: 17,
            9: 22,
            10: 22,
            11: 27,
            12: 27
        }, 
        28: {
            2: 9,
            3: 9,
            4: 11,
            5: 17,
            6: 17,
            7: 17,
            8: 17,
            9: 23,
            10: 23,
            11: 28,
            12: 28
        },
        29: {
            2: 10,
            3: 10,
            4: 12,
            5: 18,
            6: 18,
            7: 18,
            8: 18,
            9: 23,
            10: 23,
            11: 29,
            12: 29
        },
        30: {
            2: 10,
            3: 10,
            4: 12,
            5: 18,
            6: 18,
            7: 18,
            8: 18,
            9: 24,
            10: 24,
            11: 30,
            12: 30
        },
        40: {
            2: 12,
            3: 12,
            4: 18,
            5: 24,
            6: 24,
            7: 24,
            8: 24,
            9: 32,
            10: 32,
            11: 40,
            12: 40
        }
    },
    "Facing After Fall Table": {
        "New Facing": {
            1: "Same Direction",
            2: "1 Hexside Right",
            3: "2 HexSides Right",
            4: "Opposite Direction",
            5: "2 Hexsides Left",
            6: "1 Hexside Left"
        },
        "Hit Location": {
            1: "Front",
            2: "Right Side",
            3: "Right Side",
            4: "Rear",
            5: "Left Side",
            6: "Left Side"
        }
    }
};

function IsDieResultTable(data) {
    return Object.getOwnPropertyDescriptor(data, 2);
}

function GetNextNestingLevelValue(data) {
    var keys = Object.getOwnPropertyNames(data);
    return data[keys[0]];
}

function DrawTableFromDataNoNesting(data, roll, element) {
}

function DrawTableFromData1LevelNesting(data, roll, element) {
    // 1 level of nesting is always represented horizontally.
    strings = [];
    var nestingKeys = Object.getOwnPropertyNames(data);

    // Draw the header.
    strings.push("<tr>");
    for (i = 0; i < nestingKeys.length; ++i) {
        strings.push("<th>");
        strings.push(nestingKeys[i]);
        strings.push("</th>");
    }
    strings.push("</tr>");
    
    // Draw the data row.
    strings.push("<tr>");
    for (i = 0; i < nestingKeys.length; ++i) {
        strings.push("<td>");
        strings.push(data[nestingKeys[i]][roll]);
        strings.push("</td>");
    }
    strings.push("</tr>");
    
    // set the contents of the table element in the DOM.
    element.html(strings.join(""));
}

function DrawTableFromData2LevelsNesting(data, roll, element) {
    // The first level of nesting is represented horizontally, the other is represented vertically.
    strings = [];
    var level1nestingKeys = Object.getOwnPropertyNames(data);
    var level2nestingKeys = Object.getOwnPropertyNames(data[level1nestingKeys[0]]);
    
    // Draw the header.
    strings.push("<tr>");
    strings.push("<th></th>");  // empty entry for the pivot point.
    for (i = 0; i < level1nestingKeys.length; ++i) {
        strings.push("<th>");
        strings.push(level1nestingKeys[i]);
        strings.push("</th>");
    }
    strings.push("</tr>");
    
    // Draw each row of 2nd level nesting keys & values.
    for (i = 0; i < level2nestingKeys.length; ++i) {
        strings.push("<tr>");
        strings.push('<th class="rowName">');
        strings.push(level2nestingKeys[i]);
        strings.push("</th>");
        
        for (j = 0; j < level1nestingKeys.length; ++j) {
            strings.push("<td>");
            strings.push(data[level1nestingKeys[j]][level2nestingKeys[i]][roll]);
            strings.push("</td>");
        }
        
        strings.push("</tr>");
    }
    
    // set the contents of the table element in the DOM.
    element.html(strings.join(""));
}

function DrawTableFromData(data, roll, element) {
    // Discover the form of the table.  We support max nesting of 2 (because of two spatial
    // dimensions in our table).
    if (IsDieResultTable(data)) {
        console.error("tried to draw table for non-tablular result data");
    } else {  
        var nextLevel = GetNextNestingLevelValue(data);
        if (IsDieResultTable(nextLevel)) {
            DrawTableFromData1LevelNesting(data, roll, element);
        } else {
            var nextNextLevel = GetNextNestingLevelValue(nextLevel);
            if (IsDieResultTable(nextNextLevel)) {
                DrawTableFromData2LevelsNesting(data, roll, element);
            } else {
                console.error("drawing table with more than 2 levels of nesting");
            }
        }
    }
}

var sequence = 0;

var colorSequence = ["red", "blue", "green"];

var dieResultToUnicode = {
    1: "&#9856;",
    2: "&#9857;",
    3: "&#9858;",
    4: "&#9859;",
    5: "&#9860;",
    6: "&#9861;"
}

function Reset() {
    sequence += 1
    var die1 = RollOneDie();
    var die2 = RollOneDie();
    var total = die1 + die2
    $("#die1").html(dieResultToUnicode[die1]);
    $("#die2").html(dieResultToUnicode[die2]);
    $("#total").text(total)
    $("#determiningCriticalHitsTable").text(data["Determining Critical Hits Table"][total])
    DrawTableFromData2LevelsNesting(data["'Mech Punch Location Table"], die1, $("#mechPunchLocationTable"));
    DrawTableFromData2LevelsNesting(data["'Mech Kick Location Table"], die1, $("#mechKickLocationTable"));
    DrawTableFromData2LevelsNesting(data["'Mech Hit Location Table"], total, $("#mechHitLocationTable"));
    DrawTableFromData1LevelNesting(data["Cluster Hits Table"], total, $("#clusterHitsTable"));
    DrawTableFromData1LevelNesting(data["Facing After Fall Table"], die1, $("#facingAfterFallTable"));
    $(".usedOneDie").css("border-color", colorSequence[sequence % colorSequence.length]);
    $(".usedTwoDice").css("border-color", colorSequence[sequence % colorSequence.length]);
}

$(document).ready(function() {
    $(document).keypress(function(e) {
        Reset();
        // I want to allow using the spacebar for rerolling the dice, but without this
        // call to preventDefault() the page will also scroll, which will make it difficult
        // on smaller screens.
        e.preventDefault();
    });
    $(document).click(function(e) {
        Reset();
    });
    Reset();
});