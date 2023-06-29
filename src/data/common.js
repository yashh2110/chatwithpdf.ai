import gpt from "../assets/svg/gpt.svg";
import ai from "../assets/svg/ai.svg";
import pla from "../assets/svg/pla.svg";
import avatar1 from "../assets/png/avatar1.png";
import avatar2 from "../assets/png/avatar2.png";
import avatar3 from "../assets/png/avatar3.png";
export const features1 = [
  {
    id: 1,
    img: gpt,
    desc: "Chat PDF allows you to chat with up to 200 pages per PDF, with a maximum file size of 20 MB. This means you can dive deep into extensive documents without worrying about hitting a limit. Whether you're dealing with a lengthy research paper or a comprehensive business report, Chat PDF has got you covered.",
    title: "Extended Limits",
  },
  {
    id: 2,
    img: gpt,
    desc: "Ask your PDFs up to 100 questions a day. Get the information you need when you need it. No more scrolling through page-loads of text to find the information you're looking for. Just ask your PDF, and get instant answers.",
    title: "Instant Interaction",
  },
  {
    id: 3,
    img: gpt,
    desc: "We believe in hassle-free usage. With Chat PDF, there's no need for registration or signup. You can start chatting with your PDFs as soon as you access the tool. We value your time and aim to provide a seamless user experience.",
    title: "No Login",
  },
  {
    id: 4,
    img: gpt,
    desc: "We're committed to providing a high-quality service accessible to everyone. That's why Chat PDF is completely free to use. Everyone should have access to advanced tools that can make their lives easier, and we're proud to offer Chat PDF as a free service.",
    title: "100% Free",
  },
];
export const features2 = [
  {
    id: 1,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score",
    title: "Detect ChatGPT Content",
  },
  {
    id: 2,
    img: ai,
    desc: "Contentdetector.ai not just detects AI content but also detect plagiarism from the writers give what it can be done",
    title: "Detect Plagiarised Content",
  },
  {
    id: 3,
    img: pla,
    desc: "Most of the AI writers such as Jasper or copy.ai or that exist today currently use openai’s GPT 3. Our detector will be able to detect content written using any of the software",
    title: "Detect Content by AI Writing Software",
  },
];
export const features3 = [
  {
    id: 1,
    img: gpt,
    desc: "Simply upload the PDF you want to chat with. Chat PDF supports many PDFs, from textbooks and research papers to business contracts and reports.",
    title: "Upload Your PDF",
  },
  {
    id: 2,
    img: ai,
    desc: "Type in your questions or prompts. Whether you're looking for specific information or a general overview, just ask your PDF.",
    title: "Ask Your Questions",
  },
  {
    id: 3,
    img: pla,
    desc: "Chat PDF will provide instant answers backed by the information in your PDF. Our advanced AI technology ensures that the answers are accurate and relevant.",
    title: "Get Instant Answers",
  },
];
export const use_cases = [
  {
    id: 1,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 2,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 3,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 4,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 5,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 6,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
];

export const testimonial_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  // centerMode: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    rating: 5,
    avatar: avatar1,
    user: "Alissa Peterson",
    desc: "Chat PDF has transformed how I study. I can ask my textbooks questions and get instant answers. It's like having a personal tutor available 24/7!",
  },
  {
    id: 2,
    rating: 4,
    avatar: avatar2,
    user: "Anna Clarck",
    desc: "Reviewing contracts has never been easier. I can ask my PDF about specific clauses with Chat PDF and get clear explanations. It's a game-changer!",
  },
  {
    id: 3,
    rating: 4,
    avatar: avatar3,
    user: "Olindra Gotham",
    desc: "I deal with extensive documents daily as a researcher. Chat PDF allows me to extract key information and insights better. It's an invaluable tool for my research.",
  },
];

export const faq = [
  {
    id: 1,
    title:
      "How does the AI in Chat PDF comprehend the context of the questions I ask?",
    desc: "Chat PDF uses advanced AI algorithms that understand and analyze the content within your PDF. The AI grasps the context, enabling it to provide accurate and relevant answers to your queries.",
  },
  {
    id: 2,
    title: "Is there a limit on the number of PDFs I can upload per day?",
    desc: "Chat PDF currently does not impose a daily limit on the number of PDFs you can upload. You're free to chat with as many PDFs as you need, within the individual file size and page limits.",
  },
  {
    id: 3,
    title:
      "Can I ask Chat PDF to provide a general summary of the content in my PDF?",
    desc: "Absolutely! Chat PDF can provide a general overview of your PDF content. Just ask for a summary, and it will generate a concise overview based on the document's information.",
  },
  {
    id: 4,
    title:
      "What measures does Chat PDF take to ensure the safety and privacy of my data?",
    desc: "Chat PDF prioritizes data security and privacy. It adheres to strict data protection protocols, and your uploaded PDFs are only used to provide answers to your queries and are not stored beyond necessary processing.",
  },
  {
    id: 5,
    title: "Can I interact with Chat PDF in languages other than English?",
    desc: "As of now, Chat PDF primarily supports English. However, we are continually working to include more languages to make our tool accessible to a wider audience.",
  },
];
