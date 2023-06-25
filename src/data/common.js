import gpt from "../assets/svg/gpt.svg";
import ai from "../assets/svg/ai.svg";
import pla from "../assets/svg/pla.svg";
import avatar1 from "../assets/png/avatar1.png";
import avatar2 from "../assets/png/avatar2.png";
import avatar3 from "../assets/png/avatar3.png";
export const features = [
  {
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score",
    title: "Detect ChatGPT Content",
  },
  {
    img: ai,
    desc: "Contentdetector.ai not just detects AI content but also detect plagiarism from the writers give what it can be done",
    title: "Detect Plagiarised Content",
  },
  {
    img: pla,
    desc: "Most of the AI writers such as Jasper or copy.ai or that exist today currently use openai’s GPT 3. Our detector will be able to detect content written using any of the software",
    title: "Detect Content by AI Writing Software",
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
    desc: "For my blog, this tool has been an invaluable resource. It is simple to use, and by alerting me to instances of AI-generated content that my authors have created, it has already helped me improve the overall quality of my material.",
  },
  {
    id: 2,
    rating: 4,
    avatar: avatar2,
    user: "Anna Clarck",
    desc: "I do not have to worry about missing anything when I use contentdetector.ai. I can use it to check a single sentence, a single URL, or a whole website.",
  },
  {
    id: 3,
    rating: 4.5,
    avatar: avatar3,
    user: "Olindra Gotham",
    desc: "Incredibly, systems can identify both plagiarized material and content created by artificial intelligence. I would strongly suggest it to anybody serious about producing unique material of the highest standard.",
  },
];

export const faq = [
  {
    id: 1,
    title:
      "How does the AI technology in your Paraphrasing Tool understand the context?",
    desc: "Our tool's AI is trained on extensive text data, allowing it to understand word relationships and meanings. When reading your text, it grasps your intended message, keeping it intact in the paraphrased output.",
  },
  {
    id: 2,
    title: "How accurate is your Paraphrasing Tool?",
    desc: "Our tool strives for high accuracy, though not flawless. It guarantees the uniqueness of the paraphrased text and retains its original meaning. We advise users to review the output to ensure it meets their needs.",
  },
  {
    id: 3,
    title: "Can I use your tool for academic purposes?",
    desc: "Our tool can help students and academics avoid plagiarism in their work while retaining its original meaning. However, follow your institution's academic integrity guidelines and remember to cite sources appropriately.",
  },
  {
    id: 4,
    title:
      "What's the difference between paraphrasing and summarizing? Can your tool do both?",
    desc: "Paraphrasing changes the structure and words while retaining meaning. Summarizing condenses the main points. Our tool primarily paraphrases; summarizing is a future consideration.",
  },
  {
    id: 5,
    title:
      "How does your Paraphrasing Tool ensure that the original meaning is preserved?",
    desc: "Our advanced AI doesn't merely swap words with synonyms. It reconstructs sentences, altering words, so the new text reflects the true sense, letting you keep your content's core message.",
  },
  {
    id: 6,
    title: "Is my data secure when using your Paraphrasing Tool?",
    desc: "Absolutely! At paraphrasingtool.app, we prioritize user data privacy and security. The texts you input for paraphrasing are processed securely and are not stored or shared. We adhere to strict data privacy standards to ensure your content remains yours.",
  },
];
