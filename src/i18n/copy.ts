// Bilingual copy for Evera, EN / NL. Plain, warm, direct language.

export type Lang = 'en' | 'nl';

export type HeadPart = string | { it: string } | { accent: string };

export interface Copy {
  lang: Lang;
  readingLabel: string;
  nav: { about: string; offerings: string; portfolio: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    headLines: HeadPart[][];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    headLead: string;
    headEm: string;
    headMid: string;
    headEm2: string;
    headTail: string;
    paragraphs: string[];
    creds: [string, string][];
    portrait: string;
  };
  offerings: {
    eyebrow: string;
    headLead: string;
    headEm: string;
    headTail: string;
    intro: string;
    list: { k: string; title: string; sub: string; desc: string; accent: string }[];
    close: string;
  };
  voices: {
    eyebrow: string;
    headLead: string;
    headEm: string;
    list: { text: string; name: string; role: string }[];
  };
  portfolio: { eyebrow: string; headLead: string; headEm: string; desc: string; readAll: string; empty: string };
  blog: { title: string; eyebrow: string; headLead: string; headEm: string; desc: string; follow: string; back: string };
  post: { back: string; follow: string };
  contact: {
    eyebrow: string;
    headLead: string;
    headEm: string;
    newsletter: { title: string; desc: string; placeholder: string; cta: string; substack: string; done: string };
    form: {
      title: string;
      desc: string;
      fields: { name: string; email: string; message: string };
      cta: string;
      sending: string;
      done: string;
      error: string;
      emailLabel: string;
    };
  };
  footer: { meta: string[] };
}

export const COPY: { en: Copy; nl: Copy } = {
  en: {
    lang: 'en',
    readingLabel: 'min read',
    nav: {
      about: 'About',
      offerings: 'Offerings',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      eyebrow: 'Evera · Movement · Utrecht & Bilthoven',
      headLines: [
        ['Feel ', { it: 'better' }],
        ['and find ', { it: 'meaning' }, ' through the ', { accent: 'body.' }],
      ],
      sub: 'Evera is a space where dance and movement is used as a gateway to feeling and understanding. Through movement coaching and workshops I aim to help you experience new possibilities.',
      ctaPrimary: 'Explore what I do',
      ctaSecondary: 'Get in touch',
    },
    about: {
      eyebrow: 'About Evera',
      headLead: 'The body is the',
      headEm: 'content',
      headMid: 'and the',
      headEm2: 'container',
      headTail: '.',
      paragraphs: [
        'Evera is led by Yun Ki Michelle, a physical therapist, movement artist and somatic movement educator practising in Utrecht and Bilthoven since 2016. The work draws on the Laban / Bartenieff Movement System, Qi Gong, Yoga, and a decade in clinical Physical Therapy.',
        'Founded in 2026, Evera is a movement space to nurture a healthier connection with your body and find the freedom to truly express yourself.',
      ],
      creds: [
        ['2015·2020', 'Bachelor Physical Therapy, THIM'],
        ['2016·2021', 'Yoga Teacher, Fit For Free Utrecht'],
        ['2021·2026', 'Physical Therapist, YorBody & Weerdsingel West'],
        ['2025·2028', 'Somatic Movement Educator, EMOVE Institute'],
      ],
      portrait: 'Portrait of Michelle in the studio',
    },
    offerings: {
      eyebrow: 'Offerings',
      headLead: 'Two ways to',
      headEm: 'work',
      headTail: 'together.',
      intro: 'These are the two things Michelle offers. The current dates, places and themes for these and other sessions live on Instagram and Substack. Open to collaboration and custom sessions as well.',
      list: [
        {
          k: '01',
          title: 'Movement Coaching',
          sub: 'one to one',
          desc: 'A one on one session where we take time to discover how to move and play more freely. We follow what your body is asking for and work at your own pace.',
          accent: 'teal',
        },
        {
          k: '02',
          title: 'Group Movement Workshops',
          sub: 'with others',
          desc: 'All kinds of movement exercises and play, to learn about the body and to make something together. Each group finds its own rhythm.',
          accent: 'sage',
        },
      ],
      close: '',
    },
    voices: {
      eyebrow: 'What people say',
      headLead: 'Testimonials',
      headEm: '',
      list: [
        { text: 'It was fantastic! Refreshing and inspiring after years and years of dancing. What a breath of fresh air to see my body through another lens, another perspective.', name: 'Lizzy', role: 'Workshop Embodied Anatomy' },
        { text: 'I learned more about my body, appreciate it more, feel it more. And most importantly, it was so much fun. You made room to feel comfortable around strangers, to dance in front of others. I went home with a loose, comfortable, more confident feeling.', name: 'Luise', role: 'Workshop Embodied Anatomy' },
        { text: 'So lovely to come into contact with my body in such a kind way. It softens me. Michelle, you guide this with so much enthusiasm and you truly live it. Wonderful to see you enjoy it.', name: 'Ceciel', role: 'Workshop Embodied Anatomy' },
      ],
    },
    portfolio: {
      eyebrow: '',
      headLead: 'Portfolio &',
      headEm: 'Writing',
      desc: 'Notes on movement, the body and making. New writing is posted on Substack first. The latest pieces are below.',
      readAll: 'Read all posts',
      empty: 'New posts will appear here soon.',
    },
    blog: {
      title: 'Writing · Evera',
      eyebrow: '',
      headLead: '',
      headEm: 'Notes',
      desc: 'on movement, the body and making. Also posted on Substack.',
      follow: 'Follow on Substack',
      back: 'Back to Evera',
    },
    post: {
      back: 'All writing',
      follow: 'Read more on Substack',
    },
    contact: {
      eyebrow: 'Contact',
      headLead: 'Say',
      headEm: 'hello.',
      newsletter: {
        title: 'Newsletter',
        desc: 'A lively email with movements to try at home, or a regular dose of inspiration for your own practice. You can also read it on Substack.',
        placeholder: 'you@somewhere.com',
        cta: 'Subscribe',
        substack: 'Read on Substack',
        done: 'Thank you. Finish subscribing in the Substack tab.',
      },
      form: {
        title: 'Send a message',
        desc: 'For questions, collaborations, or to reserve a place at one of the workshops Michelle runs. Current workshops are listed on Instagram and Substack.',
        fields: { name: 'Your name', email: 'Email', message: 'Your message' },
        cta: 'Send message',
        sending: 'Sending…',
        done: 'Thank you. I will reply soon!',
        error: 'Something went wrong. Please email directly instead.',
        emailLabel: 'Or email directly',
      },
    },
    footer: {
      meta: ['© 2026 Evera Studio', 'Utrecht & Bilthoven', 'Colophon'],
    },
  },
  nl: {
    lang: 'nl',
    readingLabel: 'min lezen',
    nav: {
      about: 'Over Evera',
      offerings: 'Aanbod',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Neem contact op',
    },
    hero: {
      eyebrow: 'Evera · Beweging · Utrecht & Bilthoven',
      headLines: [
        ['Voel je ', { it: 'beter' }],
        ['en vind ', { it: 'betekenis' }, ' door het ', { accent: 'lichaam.' }],
      ],
      sub: 'Evera is een ruimte waar dans en beweging een toegang vormen tot voelen en begrijpen. Met bewegingscoaching en workshops wil ik je helpen nieuwe mogelijkheden te ervaren.',
      ctaPrimary: 'Ontdek wat ik doe',
      ctaSecondary: 'Neem contact op',
    },
    about: {
      eyebrow: 'Over Evera',
      headLead: 'Het lichaam is de',
      headEm: 'inhoud',
      headMid: 'en het',
      headEm2: 'vat',
      headTail: '.',
      paragraphs: [
        'Evera wordt geleid door Yun Ki Michelle, fysiotherapeut, beweegartiest en somatisch bewegingsdocent, werkzaam in Utrecht en Bilthoven sinds 2016. Het werk komt voort uit het Laban / Bartenieff Movement System, Qi Gong, Yoga en tien jaar klinische Fysiotherapie.',
        'Opgericht in 2026 is Evera een bewegingsruimte om een gezondere verbinding met je lichaam op te bouwen en de vrijheid te vinden om jezelf echt uit te drukken.',
      ],
      creds: [
        ['2015·2020', 'Bachelor Fysiotherapie, THIM'],
        ['2016·2021', 'Yogadocent, Fit For Free Utrecht'],
        ['2021·2026', 'Fysiotherapeut, YorBody & Weerdsingel West'],
        ['2025·2028', 'Somatisch Bewegingsdocent, EMOVE Institute'],
      ],
      portrait: 'Portret van Michelle in de studio',
    },
    offerings: {
      eyebrow: 'Aanbod',
      headLead: 'Twee manieren om',
      headEm: 'samen',
      headTail: 'te werken.',
      intro: "Dit zijn de twee dingen die Michelle aanbiedt. De actuele data, plekken en thema's vind je op Instagram en Substack.",
      list: [
        {
          k: '01',
          title: 'Bewegingscoaching',
          sub: 'één op één',
          desc: 'Een één op één sessie waarin we de tijd nemen om te ontdekken hoe je vrijer kunt bewegen en spelen. We volgen wat je lichaam vraagt en werken in jouw tempo.',
          accent: 'teal',
        },
        {
          k: '02',
          title: 'Groepsworkshops beweging',
          sub: 'met anderen',
          desc: 'Allerlei bewegingsoefeningen en spel, om het lichaam te leren kennen en om samen iets te maken. Elke groep vindt zijn eigen ritme.',
          accent: 'sage',
        },
      ],
      close: '',
    },
    voices: {
      eyebrow: 'Wat mensen zeggen',
      headLead: 'Ervaringen',
      headEm: '',
      list: [
        { text: 'Het was fantastisch! Verfrissend en inspirerend na jarenlang dansen. Wat een verademing om mijn lichaam door een andere lens te zien, vanuit een ander perspectief.', name: 'Lizzy', role: 'Workshop Embodied Anatomy' },
        { text: 'Ik heb meer over mijn lichaam geleerd, waardeer het meer, voel het meer. En het belangrijkste: het was zo leuk. Je maakte ruimte om je op je gemak te voelen tussen vreemden, om te dansen waar anderen bij zijn. Ik ging naar huis met een los, comfortabel en zelfverzekerder gevoel.', name: 'Luise', role: 'Workshop Embodied Anatomy' },
        { text: 'Heel fijn om op deze vriendelijke manier in contact te komen met mijn lijf. Het verzacht me. Michelle, jij begeleidt dit met zoveel enthousiasme en je leeft het voor. Heerlijk om je te zien genieten.', name: 'Ceciel', role: 'Workshop Embodied Anatomy' },
      ],
    },
    portfolio: {
      eyebrow: '',
      headLead: 'Portfolio &',
      headEm: 'Teksten',
      desc: 'Aantekeningen over beweging, het lichaam en maken. Nieuwe teksten verschijnen eerst op Substack. De recentste staan hieronder.',
      readAll: 'Bekijk alle berichten',
      empty: 'Nieuwe berichten verschijnen hier binnenkort.',
    },
    blog: {
      title: 'Teksten · Evera',
      eyebrow: '',
      headLead: '',
      headEm: 'Notities',
      desc: 'over beweging, het lichaam en maken. Ook geplaatst op Substack.',
      follow: 'Volg op Substack',
      back: 'Terug naar Evera',
    },
    post: {
      back: 'Alle teksten',
      follow: 'Lees meer op Substack',
    },
    contact: {
      eyebrow: 'Contact',
      headLead: 'Zeg',
      headEm: 'hallo.',
      newsletter: {
        title: 'Nieuwsbrief',
        desc: 'Een rustige mail per seizoen met komende sessies, een leestip en een beweging voor thuis. Je kunt hem ook op Substack lezen.',
        placeholder: 'jij@ergens.com',
        cta: 'Abonneren',
        substack: 'Lees op Substack',
        done: 'Dankjewel. Rond het abonneren af in het Substack-tabblad.',
      },
      form: {
        title: 'Stuur een bericht',
        desc: 'Voor vragen, samenwerkingen, of om een plek te reserveren bij een van de workshops die Michelle geeft. De actuele workshops staan op Instagram en Substack.',
        fields: { name: 'Je naam', email: 'E-mail', message: 'Je bericht' },
        cta: 'Verstuur bericht',
        sending: 'Versturen…',
        done: 'Dankjewel. Ik reageer snel!',
        error: 'Er ging iets mis. Mail in plaats daarvan direct.',
        emailLabel: 'Of mail direct',
      },
    },
    footer: {
      meta: ['© 2026 Evera Studio', 'Utrecht & Bilthoven', 'Colofon'],
    },
  },
};
