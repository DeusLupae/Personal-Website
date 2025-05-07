const usedQuotes = new Set();
let random;
let pickedQuote;
const listDiv = document.getElementById("listDiv");
const listButton = document.getElementById("listButDiv");
const quoteBut = document.getElementById("quoteButDiv");

function resetPage() {
    if (document.getElementById("quoteHead") != null) {
        document.getElementById("quoteHead").remove();
        document.getElementById("quoteBody").remove();
        document.getElementById("quoteAuthor").remove();
        document.getElementById("quoteButton").textContent = "Give Me a Quote";
    }
}

const quotes = [
    {
        text: "Ubi concordia, ibi victoria.",
        author: "Publius Syrus"
    },
    {
        text: "Una salus victis, nullam sperare salutem.",
        author: "P. Vergilius Maro"
    },
    {
        text: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
        author: "Albert Einstein"
    },
    {
        text: "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
        author: "Albert Einstein"
    },
    {
        text: "Education is what remains after one has forgotten what one has learned in school.",
        author: "Albert Einstein"
    },
    {
        text: "That which will not bend must break, and that which can be destroyed by truth should never be spared its demise.",
        author: "Lucien Greaves"
    },
    {
        text: "A scarlet stain upon the Earth.",
        author: "Sappho"
    },
    {
        text: "Sweet mother, I cannot weave – slender Aphrodite has overcome me with longing for a girl.",
        author: "Sappho"
    },
    {
        text: "Hope in the shadow of fear is the world’s most powerful motivator.",
        author: "Neal Shusterman, <i>Scythe<i>"
    },
];

function randInt() {
    random = Math.floor(Math.random() * quotes.length);
}

function createResetButton(text) {
    if (document.getElementById("resetButton") === null) {
        const resetButton = document.createElement("button");
        const resetNode = document.createTextNode("Reset");
        resetButton.appendChild(resetNode);
        text.insertBefore(resetButton, endDiv);
        resetButton.setAttribute("id", "resetButton");
        resetButton.setAttribute("onclick", "resetAll();");
    }
}

function resetAll() {
    resetPage();
    usedQuotes.clear();
    listDiv.hidden = true;
    listButDiv.style.display = "block";
    const resetB = document.getElementById("resetButton");
    resetB.remove();
    quoteBut.style.display = "block";
}

function testQuote() {
    if (usedQuotes.size == quotes.length) {
        usedQuotes.clear();
    }
    do {
        randInt();
    } while (usedQuotes.has(random));
           usedQuotes.add(random);
            pickedQuote = random;
}

function giveQuote() {
    resetPage();
    testQuote();
    const text = document.getElementById("docBody");
    const randomQuote = quotes[pickedQuote].text;
    const randAuth = quotes[pickedQuote].author;
    const heading = document.createElement("h2");
    const headNode = document.createTextNode("Here's your random quote:");
    heading.appendChild(headNode);
    const button = document.getElementById("quoteButton");
    text.insertBefore(heading, quoteBut);
    heading.setAttribute("id", "quoteHead")
    const quote = document.createElement("p");
    const node = document.createTextNode(randomQuote);
    quote.appendChild(node);
    quoteBut.insertBefore(quote, button);
    quote.setAttribute("id", "quoteBody");
    const auth = document.createElement("p");
    auth.innerHTML = `— ${randAuth}`
    // const authNode = document.createTextNode("—" + randAuth);
    // auth.appendChild(authNode);
    quoteBut.insertBefore(auth, button);
    auth.setAttribute("id", "quoteAuthor");
    // const buttonNode = document.createTextNode("Give Me Another");
    button.textContent = "Give Me Another";
    createResetButton(text);
    listButton.style.display = "none";
}

function listQuotes() {
    if (listDiv.hidden == true) {
        if (listDiv.innerHTML.trim() === "") {
            const listHead = document.createElement("h2");
            listHead.innerText = "Here's the list of quotes:"
            listDiv.appendChild(listHead);
            quotes.forEach(quoteObj => {
                const quotePara = document.createElement("p");
                quotePara.innerHTML = `${quoteObj.text}<br>— ${quoteObj.author}`;
                listDiv.appendChild(quotePara);
            });
        }

        const text = document.getElementById("docBody");
        resetPage();
        listDiv.hidden = false;
        listButton.style.display = "none";
        quoteBut.style.display = "none";
        createResetButton(text);
    } else {
        alert("Error. How did you do that?")
    }
}