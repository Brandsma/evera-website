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
    pull: string;
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
  footer: { bigLead: string; bigEm: string; bigTail: string; meta: string[] };
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
      sub: 'Evera is a space where dance and movement is used as a gateway to feeling and understanding.',
      ctaPrimary: 'Explore offerings',
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
        'Evera is led by Yun Ki Michelle, a physical therapist, yoga teacher and somatic movement educator practising in Utrecht and Bilthoven since 2016. The work draws on the Laban / Bartenieff Movement System, qi gong, yoga, and a decade in clinical physical therapy.',
        'Evera began in 2026 as a space for one idea: that people make better work, and feel more at home in their craft, when they create from the body outward. The sessions are small, slow, and warm. Everyone leaves with something made.',
      ],
      creds: [
        ['2015·2020', 'Bachelor Physical Therapy, THIM'],
        ['2016·2021', 'Yoga Teacher, Fit For Free Utrecht'],
        ['2021·2026', 'Physical Therapist, YorBody & Weerdsingel West'],
        ['2025·2028', 'Somatic Movement Educator, EMOVE Institute'],
      ],
      pull: 'We move, and then we make.',
      portrait: 'Portrait of Michelle in the studio',
    },
    offerings: {
      eyebrow: 'Offerings',
      headLead: 'Two ways to',
      headEm: 'work',
      headTail: 'together.',
      intro: 'These are the two things Michelle offers. The current dates, places and themes live on Instagram and Substack.',
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
          sub: 'in a circle',
          desc: 'All kinds of movement exercises and play, to learn about the body and to make something together. Each group finds its own rhythm.',
          accent: 'sage',
        },
      ],
      close: 'Both come down to the same thing, a stronger connection between mind and body.',
    },
    voices: {
      eyebrow: 'What people say',
      headLead: 'Voices from the',
      headEm: 'circle.',
      list: [
        { text: 'By the time we picked up our pens, the writing was already moving. I left with three pages I would never have found at my desk.', name: 'Iris van der Wal', role: 'Writer' },
        { text: 'Michelle holds the room with so much warmth. My voice arrived in places I had been straining toward for years.', name: 'Daan Hofman', role: 'Singer' },
        { text: 'It changed how our company approaches rehearsal. Precise, generous, and somehow also playful.', name: 'Sara El-Amrani', role: 'Artistic Director, Kollektiv 8' },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      headLead: 'Where the work',
      headEm: 'lives.',
      desc: 'Notes on movement, the body and making. New writing is posted on Substack first. The latest pieces are below.',
      readAll: 'Read all posts',
      empty: 'New posts will appear here soon.',
    },
    blog: {
      title: 'Writing · Evera',
      eyebrow: 'Writing',
      headLead: 'Field',
      headEm: 'notes.',
      desc: 'Notes on movement, the body and making. Posted on Substack, collected here.',
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
        desc: 'A quiet email each season with upcoming sessions, a reading, and a movement to try at home. You can also read it on Substack.',
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
      bigLead: 'Move',
      bigEm: 'first.',
      bigTail: ' Make next.',
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
      eyebrow: 'Evera · Bewegingsruimte voor creatieven · Utrecht & Bilthoven',
      headLines: [
        ['Maak ', { it: 'vanuit' }],
        [{ accent: 'het' }, ' ', { it: 'lichaam.' }],
      ],
      sub: 'Evera is een ruimte waar beweging de bron van artistiek werk wordt. In kleine sessies en groepsworkshops keren makers terug naar het lichaam als startpunt voor alles wat ze maken.',
      ctaPrimary: 'Bekijk het aanbod',
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
        'Evera wordt geleid door Yun Ki Michelle, fysiotherapeut, yogadocent en somatisch bewegingsdocent, werkzaam in Utrecht en Bilthoven sinds 2016. Het werk komt voort uit het Laban / Bartenieff Movement System, qi gong, yoga en tien jaar klinische fysiotherapie.',
        'Evera begon in 2026 als een ruimte voor één idee: dat mensen beter werk maken, en zich meer thuis voelen in hun vak, wanneer ze creëren vanuit het lichaam. De sessies zijn klein, traag en warm. Iedereen gaat naar huis met iets gemaakts.',
      ],
      creds: [
        ['2015·2020', 'Bachelor Fysiotherapie, THIM'],
        ['2016·2021', 'Yogadocent, Fit For Free Utrecht'],
        ['2021·2026', 'Fysiotherapeut, YorBody & Weerdsingel West'],
        ['2025·2028', 'Somatisch Bewegingsdocent, EMOVE Institute'],
      ],
      pull: 'Eerst bewegen. Dan maken.',
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
          sub: 'in een kring',
          desc: 'Allerlei bewegingsoefeningen en spel, om het lichaam te leren kennen en om samen iets te maken. Elke groep vindt zijn eigen ritme.',
          accent: 'sage',
        },
      ],
      close: 'Beide komen neer op hetzelfde, een sterkere verbinding tussen lichaam en geest.',
    },
    voices: {
      eyebrow: 'Wat mensen zeggen',
      headLead: 'Stemmen uit de',
      headEm: 'kring.',
      list: [
        { text: "Tegen de tijd dat we onze pennen oppakten, was het schrijven al in beweging. Ik vertrok met drie pagina's die ik aan mijn bureau nooit had gevonden.", name: 'Iris van der Wal', role: 'Schrijver' },
        { text: 'Michelle houdt de ruimte met zoveel warmte. Mijn stem kwam aan op plekken waar ik jaren naar had geleund.', name: 'Daan Hofman', role: 'Zanger' },
        { text: 'Het veranderde hoe ons gezelschap repeteert. Precies, gul en op een of andere manier ook speels.', name: 'Sara El-Amrani', role: 'Artistiek Leider, Kollektiv 8' },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      headLead: 'Waar het werk',
      headEm: 'leeft.',
      desc: 'Aantekeningen over beweging, het lichaam en maken. Nieuwe teksten verschijnen eerst op Substack. De recentste staan hieronder.',
      readAll: 'Bekijk alle berichten',
      empty: 'Nieuwe berichten verschijnen hier binnenkort.',
    },
    blog: {
      title: 'Teksten · Evera',
      eyebrow: 'Teksten',
      headLead: 'Veld',
      headEm: 'notities.',
      desc: 'Aantekeningen over beweging, het lichaam en maken. Gepost op Substack, hier verzameld.',
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
        done: 'Dankjewel. Michelle reageert binnen een dag.',
        error: 'Er ging iets mis. Mail in plaats daarvan direct.',
        emailLabel: 'Of mail direct',
      },
    },
    footer: {
      bigLead: 'Beweeg',
      bigEm: 'eerst.',
      bigTail: ' Maak daarna.',
      meta: ['© 2026 Evera Studio', 'Utrecht & Bilthoven', 'Colofon'],
    },
  },
};
