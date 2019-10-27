// questions object - referenced using position in array 
var question = [{
        ques: "In which year did Blondie have a number one hit in the UK with ‘Heart of Glass’?",
        ans: {
            a: "1979",
            b: "1981",
            c: "1978"
        },
        correct: "a" 
    },
    {
        ques: "Which Swedish pop group had a UK number one hit with ‘Cotton Eye Joe’ in 1995?",
        ans: {
            a: "Real McCoy",
            b: "Fun Factory",
            c: "Rednex"
        },
        correct: "c" 
    },
    {
        ques: "In Lou Reed’s ‘Walk on the Wild Side’, who ‘thought she was James Dean for a day’?",
        ans: {
            a: "Jamie",
            b: "Julie",
            c: "Jackie"
        },
        correct: "c" 
    },
    {
        ques: "What are the first names of the four members of ABBA?",
        ans: {
            a: "Bernie, Bruno, Agnesa, Anni-Frid",
            b: "Benny, Björn, Agnetha and Anni-Frid",
            c: "Brigitte, Bjorn, Anders, Arlette"
        },
        correct: "b" 
    },
    {
        ques: "Which band released albums entitled ‘Morrison Hotel, ‘Waiting for the Sun’ and ‘L.A. Woman’?",
        ans: {
            a: "The Doors",
            b: "The Smiths",
            c: "Jefferson Airplane"
        },
        correct: "a" 
    },
    {
        ques: "What is the first word in Gloria Gaynor’s ‘I Will Survive’?",
        ans: {
            a: "First",
            b: "Now",
            c: "At"
        },
        correct: "c" 
    },
    {
        ques: "In which year did Elvis Presley die?",
        ans: {
            a: "1977",
            b: "1988",
            c: "Still alive"
        },
        correct: "a" 
    },
    {
        ques: "“Street’s like a jungle, so call the police, following the herd down to Greece on holiday…” These are the opening lyrics to which 1994 hit?",
        ans: {
            a: "Sabotage - Beastie Boys",
            b: "Girls and Boys - Blur",
            c: "Undone - Weezer"
        },
        correct: "b" 
    },
    {
        ques: "A string quartet consists of four musicians, but which instruments do they traditionally play?",
        ans: {
            a: "Violin, viola, cello, bass",
            b: "Two violins, viola, cello",
            c: "Two violins, cello, harp"
        },
        correct: "b" 
    },
    {
        ques: "“Humidity is rising, barometer’s getting low, according to all sources…” What are the next 6 words?",
        ans: {
            a: "The sky is about to glow",
            b: "The street's no place to go",
            c: "The street's the place to go"
        },
        correct: "c" 
    }]

// onclick function 
$(".a").on("click", function () {
    var user = $(this).text();
    console.log(user);
    if (userChoice === question[questioIndex].correct) {
        correct++;
        }

//  Quiz questions
// 1. In which year did Blondie have a number one hit in the UK with ‘Heart of Glass’?
// CORRECT - 1979
// WRONG - 1981
// WRONG - 1978

// 2. Which Swedish pop group had a UK number one hit with ‘Cotton Eye Joe’ in 1995?
// CORRECT - Rednex
// WRONG - Real McCoy
// WRONG - Fun Factory

// 3. In Lou Reed’s ‘Walk on the Wild Side’, who ‘thought she was James Dean for a day’?
// CORRECT - Jackie (Jackie is just speeding away, thought she was James Dean for a day.)
// WRONG - Jamie
// WRONG - Julie

// 4. What are the first names of the four members of ABBA?
// CORRECT - Benny, Björn, Agnetha and Anni-Frid
// WRONG - Brigitte, Bjorn, Anders, Arlette
// WRONG - Bernie, Bruno, Agnesa, Anni-Frid

// 5. Which band released albums entitled ‘Morrison Hotel, ‘Waiting for the Sun’ and ‘L.A. Woman’?
// CORRECT - The Doors
// WRONG - Jefferson Airplane
// WRONG - The Smiths

// 6. What is the first word in Gloria Gaynor’s ‘I Will Survive’?
// CORRECT - At (At first I was afraid, I was petrified)
// WRONG - First
// WRONG - Now

// 7. In which year did Elvis Presley die?
// CORRECT - 1977
// WRONG - 1988
// WRONG - Still alive

// 8. “Street’s like a jungle, so call the police, following the herd down to Greece on holiday…” These are the opening lyrics to which 1994 hit?
// CORRECT - Girls and Boys – Blur
// WRONG - Undone - Weezer
// WRONG - Sabotage - Beastie Boys

// 9. A string quartet consists of four musicians, but which instruments do they traditionally play?
// CORRECT - Two violins, viola, and cello
// WRONG - Violin, viola, cello, and bass
// WRONG - Two violins, cello, and harp

// 10. “Humidity is rising, barometer’s getting low, according to all sources…” What are the next 6 words?
// CORRECT - The street’s the place to go (It’s Raining Men – The Weathergirls)
// WRONG - We have nowhere left to go
// WRONG - The sky is about to glow

