const set1 = [
    "Given the choice of anyone in the world, whom would you want as a dinner guest?",   // Icebreaker
    "Before making a telephone call, do you ever rehearse what you are going to say? Why?", // Getting to know habits
    "When did you last sing to yourself? To someone else?",  // A bit personal but not too intrusive
    "Would you like to be famous? In what way?",  // Aspirations
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",  // Hopes and dreams
    "What would constitute a 'perfect' day for you?",  // Personal preferences
    "Do you have a secret hunch about how you will die?",  // More personal and introspective
    "For what in your life do you feel most grateful?",  // Core values and gratitude
    "If you could change anything about the way you were raised, what would it be?",  // Childhood and upbringing
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",  // Philosophical question
    "Take four minutes and tell your partner your life story in as much detail as possible.",  // Deep dive into life story
    "Name three things you and your partner appear to have in common."  // Wrap-up question after learning about each other
];

const set2 = [
    "What do you value most in a friendship?",  // Starting with values
    "What does friendship mean to you?",  // Related to values, more specific
    "What roles do love and affection play in your life?",  // Personal insights
    "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",  // Dreams and aspirations
    "What is the greatest accomplishment of your life?",  // Achievements
    "What is your most treasured memory?",  // Positive memories
    "How do you feel about your relationship with your mother?",  // Family relationships
    "How close and warm is your family? Do you feel your childhood was happier than most other people’s?",  // Family dynamics
    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",  // Intriguing and personal
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",  // Philosophical and personal
    "What is your most terrible memory?",  // More personal and introspective
    "Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items."  // Wrap-up with positive interaction
];

const set3 = [
    "Tell your partner something that you like about them already.",  // Starting with a positive note
    "Complete this sentence: “I wish I had someone with whom I could share...“",  // Sharing desires
    "When did you last cry in front of another person? By yourself?",  // More personal but not too deep
    "Share with your partner an embarrassing moment in your life.",  // Lightening the mood with vulnerability
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know.",  // Deepening the connection
    "What, if anything, is too serious to be joked about?",  // Understanding boundaries
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",  // Deep reflection
    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",  // Personal priorities
    "Of all the people in your family, whose death would you find most disturbing? Why?",  // Personal and emotional
    "Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.",  // Seeking advice and understanding
    "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.",  // Honest compliment
    "Make three true “we” statements each. For instance, “We are both in this room feeling...“"  // Wrap-up with shared feelings
];

const questionSets = [set1, set2, set3];
const headers = ["First Date", "Second Date", "Third Date"];
let currentSet = 0;
let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const headerElement = document.getElementById("header");
    const nextButton = document.getElementById("next-button");
    const previousButton = document.getElementById("previous-button");

    function updateQuestion() {
        questionElement.textContent = questionSets[currentSet][currentQuestionIndex];
        headerElement.textContent = headers[currentSet];
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questionSets[currentSet].length) {
            currentQuestionIndex = 0;
            currentSet++;
            if (currentSet >= questionSets.length) {
                currentSet = 0; // Loop back to the first set if needed
            }
        }
        updateQuestion();
    });

    previousButton.addEventListener("click", () => {
        currentQuestionIndex--;
        if (currentQuestionIndex < 0) {
            currentSet--;
            if (currentSet < 0) {
                currentSet = questionSets.length - 1; // Loop back to the last set if needed
            }
            currentQuestionIndex = questionSets[currentSet].length - 1;
        }
        updateQuestion();
    });

    // Initialize with the first question
    updateQuestion();
});
