const quotes=[
    {
        quote: "1. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "2. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "3. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "4. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "5. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "6. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "7. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "8. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "9. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    },
    {
        quote: "10. The way to get started is to quit talking and begit doing",
        author: "Walt Disney",
    }
];
const quotLen=quotes.length;
const random=Math.floor(Math.random());

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todayQuote=quotes[random*quotLen];

quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;