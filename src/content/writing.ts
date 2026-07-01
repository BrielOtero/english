import type { WritingPrompt } from '../types';

// Pushed-output writing prompts with model answers. Generated content.
export const WRITING: WritingPrompt[] = [
  {
    id: 'wr-my-family',
    level: 'A1',
    title: 'Describe your family',
    prompt:
      'Write 4-6 sentences about your family. Say how many people there are, who they are, and one thing each person likes.',
    minWords: 30,
    tips: [
      'Use "There is" for one person and "There are" for more than one.',
      'Use possessives: my mother, my brother, my parents.',
      'Use "He/She likes..." with the -s ending for he and she.',
    ],
    usefulPhrases: [
      {
        en: 'There are four people in my family.',
      },
      {
        en: 'This is my...',
      },
      {
        en: 'He/She is...',
      },
      {
        en: 'My mother likes...',
      },
      {
        en: 'We live in...',
      },
    ],
    model:
      'There are four people in my family. We live in a small house in Seville. My father is a teacher and he likes football. My mother is a doctor and she likes music. I have one brother. He is ten years old and he likes computer games.',
  },
  {
    id: 'wr-my-day',
    level: 'A1',
    title: 'My daily routine',
    prompt:
      'Write 5-6 sentences about a normal day. Say what time you get up, what you do in the morning, afternoon, and evening.',
    minWords: 35,
    tips: [
      'Use the present simple: I get up, I eat, I go.',
      "Use time expressions: at 7 o'clock, in the morning, at night.",
      'Use "then" and "after that" to put actions in order.',
    ],
    usefulPhrases: [
      {
        en: 'I get up at...',
      },
      {
        en: 'In the morning / afternoon / evening',
      },
      {
        en: 'Then I...',
      },
      {
        en: 'After that, I...',
      },
      {
        en: 'I go to bed at...',
      },
    ],
    model:
      "I get up at seven o'clock every day. In the morning, I have breakfast and then I go to work. I work in an office. In the afternoon, I eat lunch with my friends. After that, I go home and I cook dinner. In the evening, I watch television. I go to bed at eleven o'clock.",
  },
  {
    id: 'wr-postcard',
    level: 'A2',
    title: 'A postcard from your holiday',
    prompt:
      'Write a short postcard to a friend from your holiday. Say where you are, what the weather is like, what you are doing, and what you did yesterday.',
    minWords: 50,
    tips: [
      'Start with "Hi" or "Dear..." and end with "See you soon" and your name.',
      'Use the present continuous for now: "I am staying...".',
      'Use the past simple for yesterday: "went", "saw", "ate".',
      'Keep it friendly and use exclamation marks for excitement.',
    ],
    usefulPhrases: [
      {
        en: 'Greetings from...',
      },
      {
        en: 'The weather is...',
      },
      {
        en: 'I am having a great time.',
      },
      {
        en: 'Yesterday I went to...',
      },
      {
        en: 'Wish you were here!',
      },
      {
        en: 'See you soon!',
      },
    ],
    model:
      'Hi Marta,\n\nGreetings from Rome! I am having a great time here. The weather is hot and sunny, so we are spending the days outside. Right now I am sitting in a little café and drinking a coffee. Yesterday I went to the Colosseum and I ate the best pizza of my life. Tomorrow we are going to a museum. Wish you were here!\n\nSee you soon,\nAna',
  },
  {
    id: 'wr-invitation',
    level: 'A2',
    title: 'Invite a friend (informal email)',
    prompt:
      'Write an informal email inviting a friend to your birthday party. Say when and where it is, what you will do, and ask them to reply.',
    minWords: 50,
    tips: [
      'Start with "Hi [name]," and finish with "Bye for now" or "Love".',
      'Use "would you like to...?" to make a polite invitation.',
      'Give clear details: the day, the time, and the place.',
      'Ask a question at the end so your friend replies.',
    ],
    usefulPhrases: [
      {
        en: "I'm having a party.",
      },
      {
        en: 'Would you like to come?',
      },
      {
        en: "It's on Saturday at 8 p.m.",
      },
      {
        en: "We're going to...",
      },
      {
        en: 'Let me know if you can come.',
      },
      {
        en: 'Hope to see you there!',
      },
    ],
    model:
      "Hi Tom,\n\nHow are you? I'm writing because I'm having a party for my birthday and I would love you to come. It's on Saturday at eight o'clock at my flat. We're going to have dinner, listen to music, and maybe dance a little. Some friends from work are coming too, so it will be fun.\n\nLet me know if you can come. Hope to see you there!\n\nLove,\nClara",
  },
  {
    id: 'wr-review',
    level: 'B1',
    title: 'Write a review',
    prompt:
      "Write a review of a restaurant, film, or place you visited recently. Describe it, say what you liked and didn't like, and recommend it (or not).",
    minWords: 90,
    tips: [
      'Give your review a clear structure: introduction, details, recommendation.',
      'Use a range of adjectives instead of repeating "good" and "nice".',
      'Use the past simple to describe your experience.',
      'End with a clear recommendation and who it is best for.',
    ],
    usefulPhrases: [
      {
        en: 'I recently visited...',
      },
      {
        en: 'What I liked most was...',
      },
      {
        en: 'The only downside was...',
      },
      {
        en: "It's well worth a visit.",
      },
      {
        en: 'I would highly recommend it.',
      },
      {
        en: "It's perfect for...",
      },
    ],
    model:
      "Last weekend I had dinner at La Cocina, a small Italian restaurant in the city centre. What I liked most was the friendly atmosphere and the homemade pasta, which was absolutely delicious. The staff were attentive without being intrusive, and the prices were very reasonable. The only downside was that we had to wait twenty minutes for a table, even though we had booked. Despite this, I would highly recommend it. It's perfect for a relaxed evening with friends or family, and I can't wait to go back.",
  },
  {
    id: 'wr-story',
    level: 'B1',
    title: 'Tell a story',
    prompt:
      'Write a short story that begins with the sentence: "It was raining hard when the phone rang." Describe what happened next.',
    minWords: 90,
    tips: [
      'Use the past continuous for background (was raining) and past simple for events (rang).',
      'Use time linkers: "suddenly", "a few minutes later", "in the end".',
      'Add some adjectives and feelings to make it interesting.',
      'Give your story a clear ending.',
    ],
    usefulPhrases: [
      {
        en: 'Suddenly,...',
      },
      {
        en: 'At first... but then...',
      },
      {
        en: 'A few minutes later',
      },
      {
        en: "I couldn't believe it.",
      },
      {
        en: 'In the end,...',
      },
      {
        en: 'To my surprise,...',
      },
    ],
    model:
      "It was raining hard when the phone rang. I was alone at home, reading a book, and the sudden noise made me jump. At first I didn't recognise the number, but then a familiar voice asked me to come outside. To my surprise, it was my old friend David, who I hadn't seen for ten years. He was standing in the street, completely wet, with a huge smile on his face. A few minutes later we were laughing in my kitchen, drinking hot coffee. In the end, that rainy evening became one of the best nights of the year.",
  },
  {
    id: 'wr-complaint',
    level: 'B2',
    title: 'A formal complaint email',
    prompt:
      'You bought a product online that arrived damaged and the company has not replied to you. Write a formal email of complaint asking for a refund or replacement.',
    minWords: 100,
    tips: [
      'Use a formal greeting ("Dear Sir or Madam,") and sign-off ("Yours faithfully,").',
      'State the problem clearly in the first paragraph with order details.',
      'Stay polite but firm; avoid contractions like "don\'t" and "I\'m".',
      'End by stating exactly what you want and a deadline.',
    ],
    usefulPhrases: [
      {
        en: 'I am writing to complain about...',
      },
      {
        en: 'Unfortunately, the item arrived damaged.',
      },
      {
        en: 'Despite several attempts to contact you...',
      },
      {
        en: 'I would therefore request a full refund.',
      },
      {
        en: 'I look forward to your prompt reply.',
      },
      {
        en: 'Yours faithfully,',
      },
    ],
    model:
      'Dear Sir or Madam,\n\nI am writing to complain about an order I placed on your website on 3 June (order number 48217). Unfortunately, the item, a glass coffee table, arrived with a large crack across the surface, which makes it impossible to use.\n\nDespite several attempts to contact you by email over the past two weeks, I have not received any response. This delay is both frustrating and unacceptable for a problem that was not my fault.\n\nI would therefore request either a full refund or a replacement delivered at no extra cost within the next ten days. I have attached photographs of the damage as evidence.\n\nI look forward to your prompt reply.\n\nYours faithfully,\nEsteban Ruiz',
  },
  {
    id: 'wr-for-against',
    level: 'B2',
    title: 'A for-and-against essay',
    prompt:
      'Write a balanced essay on the following statement: "Social media does more harm than good." Present arguments for and against, then give your own conclusion.',
    minWords: 120,
    tips: [
      'Organise it in four paragraphs: introduction, arguments for, arguments against, conclusion.',
      'Use a range of linkers: "whereas", "nevertheless", "on the whole".',
      'Support each point with a reason or example.',
      'Keep your own opinion for the conclusion, not the body.',
    ],
    usefulPhrases: [
      {
        en: 'There are strong arguments on both sides.',
      },
      {
        en: 'It is often argued that...',
      },
      {
        en: 'Whereas / While',
      },
      {
        en: 'Nevertheless,...',
      },
      {
        en: 'Taking everything into account,...',
      },
      {
        en: 'In conclusion,...',
      },
    ],
    model:
      'Social media has become part of daily life for billions of people, yet whether it is beneficial remains a matter of debate. There are strong arguments on both sides.\n\nOn the one hand, it is often argued that social media causes real harm. It can damage mental health, spread misinformation quickly, and encourage people to compare their lives unfavourably with others. Moreover, the constant flow of notifications can be highly addictive.\n\nNevertheless, the benefits should not be ignored. Social media allows people to stay in touch across long distances, gives small businesses a cheap way to reach customers, and can raise awareness of important causes within hours.\n\nTaking everything into account, I believe social media is neither good nor bad in itself; what matters is how we use it. With greater awareness and self-control, its advantages can clearly outweigh its drawbacks.',
  },
  {
    id: 'wr-proposal',
    level: 'C1',
    title: 'A proposal with recommendations',
    prompt:
      'Your company wants to improve employee wellbeing. Write a formal proposal to management outlining the current situation, suggesting two or three concrete measures, and explaining the expected benefits.',
    minWords: 160,
    tips: [
      'Use clear headings (Introduction, Current situation, Recommendations, Conclusion).',
      'Adopt a formal, persuasive register and use the passive where appropriate.',
      'Justify each recommendation with a likely benefit or outcome.',
      'Use hedging and recommendation language: "It would be advisable to...", "I would suggest...".',
    ],
    usefulPhrases: [
      {
        en: 'The purpose of this proposal is to...',
      },
      {
        en: 'At present,...',
      },
      {
        en: 'It would be advisable to...',
      },
      {
        en: 'This would not only... but also...',
      },
      {
        en: 'In light of the above,...',
      },
      {
        en: 'I am confident that these measures would...',
      },
    ],
    model:
      'Introduction\n\nThe purpose of this proposal is to recommend a number of measures aimed at improving employee wellbeing, which has a direct impact on both productivity and staff retention.\n\nCurrent situation\n\nAt present, many employees report high levels of stress, partly due to rigid working hours and limited support for mental health. Recent surveys suggest that absenteeism has risen over the past year, which is a cause for concern.\n\nRecommendations\n\nFirstly, it would be advisable to introduce flexible working arrangements, allowing staff to adapt their hours within agreed limits. This would not only reduce stress but also help employees balance professional and personal commitments. Secondly, I would suggest providing access to confidential counselling services. Finally, redesigning the break areas into more comfortable spaces would encourage genuine rest during the working day.\n\nConclusion\n\nIn light of the above, I am confident that these measures would foster a healthier, more motivated workforce. The initial investment would soon be offset by lower absenteeism and improved performance across the company.',
  },
];
