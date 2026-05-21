export type Lang = 'en' | 'nl';

export type Workshop = {
  n: string;
  title: string;
  titleIt: string;
  date: string;
  time: string;
  place: string;
  price: string;
  desc: string;
  accent: string;
  dot: string;
};

export type Copy = typeof COPY.en;

export const COPY = {
  en: {
    lang: 'en' as Lang,
    otherLang: 'nl' as Lang,
    otherLangLabel: 'NL',
    nav: {
      workshops: 'Workshops',
      about: 'About',
      voices: 'Voices',
      visit: 'Visit',
      book: 'Reserve',
    },
    hero: {
      eyebrow: 'Evera · Movement space for creatives · Utrecht & Bilthoven',
      sub: 'Evera is a space where movement becomes the source of artistic work. Through small workshops, writers, singers, painters and makers return to the body as the starting point for everything they create.',
      ctaPrimary: 'See upcoming workshops',
      ctaSecondary: 'About Evera',
      scroll: 'Scroll',
      stat1: ['04', 'workshops, this season'],
      stat2: ['8', 'seats per circle'],
      stat3: ['2026', 'founding year'],
      headLines: [
        ['Create ', { it: 'from' }],
        ['the ', { accent: 'body' }, ' ', { it: 'outward.' }],
      ] as const,
    },
    marquee: ['Write', 'Sing', 'Paint', 'Letter', 'Sculpt', 'Sound', 'Make', 'Move'],
    manifesto: {
      eyebrow: 'What we believe',
      text: [
        'The body is the first studio.',
        'Before the page, the voice, the brush, the chisel,',
        'there is a body that listens, weighs, breathes, leans in.',
        'Evera workshops begin there.',
        'We move, and then we make.',
      ],
    },
    workshops: {
      eyebrow: 'Upcoming workshops',
      headLead: 'Four ways to',
      headEm: 'move',
      headTail: 'into making.',
      intro:
        'Each workshop is a small circle, capped at eight, held over a long afternoon. We move together for the first hour and a half. The rest of the time, we make.',
      metaLabels: { date: 'Date', time: 'Time', where: 'Where', price: 'Price' },
      list: [
        {
          n: '01', title: 'Move &', titleIt: 'Write',
          date: 'Sat 27 Jun 2026', time: '13:00 to 17:00',
          place: 'Studio TBA, Utrecht', price: '€65',
          desc: 'Somatic prompts paired with writing scores. We loosen the spine, then the sentence. Bring a notebook you love.',
          accent: 'teal', dot: 'Saturday afternoon',
        },
        {
          n: '02', title: 'Move &', titleIt: 'Sing',
          date: 'Sun 12 Jul 2026', time: '14:00 to 18:00',
          place: 'Studio TBA, Bilthoven', price: '€70',
          desc: 'Voice is breath shaped by the body. We move from feet to ribs to throat, until song is the natural next thing.',
          accent: 'sage', dot: 'Sunday afternoon',
        },
        {
          n: '03', title: 'Move &', titleIt: 'Calligraphy',
          date: 'Sat 30 Aug 2026', time: '13:00 to 17:00',
          place: 'Studio TBA, Utrecht', price: '€75',
          desc: 'Brush, ink, breath. We trace the body\'s arcs onto paper. Materials and instruction provided.',
          accent: 'blush', dot: 'Saturday afternoon',
        },
        {
          n: '04', title: 'Move &', titleIt: 'Paint',
          date: 'Sun 20 Sep 2026', time: '14:00 to 18:00',
          place: 'Studio TBA, Bilthoven', price: '€75',
          desc: 'Large paper, wet pigments, whole arms. Painting becomes choreography. Aprons supplied.',
          accent: 'sand', dot: 'Sunday afternoon',
        },
      ] as Workshop[],
      seats: 'seats left',
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
        'Evera was founded in 2026 as a space dedicated to one idea: that artists make better work, and live easier in their craft, when they create from the body outward. The workshops are small, slow, and warm. Everyone leaves with something made.',
      ],
      creds: [
        ['2015·2020', 'Bachelor Physical Therapy, THIM'],
        ['2016·2021', 'Yoga Teacher, Fit For Free Utrecht'],
        ['2021·2026', 'Physical Therapist, YorBody & Weerdsingel West'],
        ['2025·2028', 'Somatic Movement Educator, EMOVE Institute'],
      ] as [string, string][],
      pull: 'We move, and then we make.',
      portraitAlt: 'Portrait of Michelle in the studio',
      portraitCaption: 'Yun Ki Michelle · Utrecht',
    },
    archive: {
      eyebrow: 'From the archive',
      headLead: 'A year of',
      headEm: 'circles.',
      desc: 'Documentation from previous workshops, residencies, and quieter studio days.',
      tiles: [
        { ttl: 'Move & Write, Antwerp', tag: 'October 2025', video: false, img: 'michelle-move-stretch.jpg' },
        { ttl: 'Solo morning practice', tag: 'Film, 2025', video: true, img: 'michelle-portrait-golden.jpg' },
        { ttl: 'Voice circle, sketch', tag: 'Drawing', video: false, img: 'michelle-portrait-nature.jpg' },
        { ttl: 'Group session, Studio Noord', tag: 'Documentation', video: false, img: 'michelle-move-forest.jpg' },
        { ttl: 'How does grief move?', tag: 'Film, 2024', video: true, img: 'michelle-move-scarf.jpg' },
        { ttl: 'Calligraphy on the floor', tag: 'Studio diary', video: false, img: 'michelle-portrait-garden.jpg' },
      ],
    },
    voices: {
      eyebrow: 'What people say',
      headLead: 'Voices from the',
      headEm: 'circle.',
      list: [
        {
          text: 'By the time we picked up our pens, the writing was already moving. I left with three pages I would never have found at my desk.',
          name: 'Iris van der Wal', role: 'Writer · Move & Write',
        },
        {
          text: 'Michelle holds the room with so much warmth. My voice arrived in places I had been straining toward for years.',
          name: 'Daan Hofman', role: 'Singer · Move & Sing',
        },
        {
          text: 'It changed how our company approaches rehearsal. Precise, generous, and somehow also playful.',
          name: 'Sara El-Amrani', role: 'Artistic Director, Kollektiv 8',
        },
      ],
    },
    booking: {
      eyebrow: 'Reserve a seat',
      headLead: 'Hold a place in the',
      headEm: 'circle.',
      stepsLabel: 'Steps',
      steps: [
        { title: 'Workshop', sub: 'Pick a circle' },
        { title: 'Seats', sub: 'How many?' },
        { title: 'Details', sub: 'Tell us about you' },
        { title: 'Confirm', sub: 'Review & send' },
      ],
      stepHeads: [
        { lead: 'Which', em: 'circle?' },
        { lead: 'How many', em: 'seats?' },
        { lead: 'A few', em: 'details.' },
        { lead: 'Almost', em: 'there.' },
      ],
      helpers: [
        'Each workshop is capped at eight. Pick the one that calls to you.',
        'Most people come alone. Some bring a friend. Up to four per reservation.',
        'So we know who is arriving and what to prepare.',
        'Take one more look. We will confirm within a day by email.',
      ],
      seatsLabel: 'Number of seats',
      next: 'Continue',
      back: 'Back',
      send: 'Send reservation',
      doneTitle: 'Held.',
      doneTitleEm: 'See you soon.',
      doneBody: 'Your seat is reserved. You will hear from us within a day with payment details and what to bring. In the meantime, drink water and notice your shoulders.',
      doneCta: 'Back to Evera',
      summary: ['Workshop', 'Date', 'Seats', 'Name', 'Email'],
      fields: { name: 'Your name', email: 'Email', phone: 'Phone (optional)', note: 'Anything to share?' },
    },
    foot: {
      newsletter: {
        eyebrow: 'Slow letter',
        headLead: 'Field',
        headEm: 'notes',
        headTail: ', once a season.',
        desc: 'A quiet email each season with the next workshops, a reading, and a movement to try at home. No selling. Unsubscribe whenever.',
        placeholder: 'you@somewhere.com',
        cta: 'Subscribe',
        done: 'Thank you. Watch your inbox.',
      },
      contact: {
        eyebrow: 'Visit & contact',
        headLead: 'Come',
        headEm: 'find us.',
        desc: 'For workshop questions, collaborations, press, or to host Evera at your studio.',
        rows: [
          ['Email', 'hello@evera.studio', 'mailto:hello@evera.studio'],
          ['Studio', 'Utrecht & Bilthoven (location confirmed on booking)', ''],
          ['Instagram', '@evera.studio', 'https://instagram.com/evera.studio'],
          ['Letter', 'fieldnotes.evera.studio', '#'],
        ] as [string, string, string][],
      },
    },
    footer: {
      bigLead: 'Move',
      bigEm: 'first.',
      bigTail: ' Make next.',
      meta: ['© 2026 Evera Studio', 'Built with care in Utrecht', 'Colophon'],
    },
  },
  nl: {
    lang: 'nl' as Lang,
    otherLang: 'en' as Lang,
    otherLangLabel: 'EN',
    nav: {
      workshops: 'Workshops',
      about: 'Over Evera',
      voices: 'Stemmen',
      visit: 'Bezoek',
      book: 'Reserveren',
    },
    hero: {
      eyebrow: 'Evera · Bewegingsruimte voor creatieven · Utrecht & Bilthoven',
      sub: 'Evera is een ruimte waar beweging de bron van artistiek werk wordt. In kleine workshops keren schrijvers, zangers, schilders en makers terug naar het lichaam als startpunt voor alles wat ze maken.',
      ctaPrimary: 'Bekijk komende workshops',
      ctaSecondary: 'Over Evera',
      scroll: 'Scroll',
      stat1: ['04', 'workshops, dit seizoen'],
      stat2: ['8', 'plekken per kring'],
      stat3: ['2026', 'oprichtingsjaar'],
      headLines: [
        ['Maak ', { it: 'vanuit' }],
        [{ accent: 'het' }, ' ', { it: 'lichaam.' }],
      ] as const,
    },
    marquee: ['Schrijven', 'Zingen', 'Schilderen', 'Letteren', 'Boetseren', 'Klank', 'Maken', 'Bewegen'],
    manifesto: {
      eyebrow: 'Wat we geloven',
      text: [
        'Het lichaam is de eerste studio.',
        'Voor de pagina, de stem, het penseel, de beitel,',
        'is er een lichaam dat luistert, weegt, ademt, leunt.',
        'Bij Evera beginnen workshops daar.',
        'We bewegen, en dan maken we.',
      ],
    },
    workshops: {
      eyebrow: 'Komende workshops',
      headLead: 'Vier manieren om',
      headEm: 'te bewegen',
      headTail: 'naar het maken toe.',
      intro: 'Elke workshop is een kleine kring van maximaal acht, een lange middag lang. Het eerste anderhalf uur bewegen we samen. Daarna maken we.',
      metaLabels: { date: 'Datum', time: 'Tijd', where: 'Locatie', price: 'Prijs' },
      list: [
        {
          n: '01', title: 'Beweeg &', titleIt: 'Schrijf',
          date: 'Za 27 jun 2026', time: '13:00 tot 17:00',
          place: 'Studio TBA, Utrecht', price: '€65',
          desc: 'Somatische prompts gekoppeld aan schrijfscores. Eerst de wervelkolom los, dan de zin. Neem een schrift mee waar je van houdt.',
          accent: 'teal', dot: 'Zaterdagmiddag',
        },
        {
          n: '02', title: 'Beweeg &', titleIt: 'Zing',
          date: 'Zo 12 jul 2026', time: '14:00 tot 18:00',
          place: 'Studio TBA, Bilthoven', price: '€70',
          desc: 'Stem is adem gevormd door het lichaam. We bewegen van voeten naar ribben naar keel, tot zingen het natuurlijke volgende is.',
          accent: 'sage', dot: 'Zondagmiddag',
        },
        {
          n: '03', title: 'Beweeg &', titleIt: 'Letter',
          date: 'Za 30 aug 2026', time: '13:00 tot 17:00',
          place: 'Studio TBA, Utrecht', price: '€75',
          desc: 'Penseel, inkt, adem. We trekken de bogen van het lichaam op papier. Materiaal en instructie aanwezig.',
          accent: 'blush', dot: 'Zaterdagmiddag',
        },
        {
          n: '04', title: 'Beweeg &', titleIt: 'Schilder',
          date: 'Zo 20 sep 2026', time: '14:00 tot 18:00',
          place: 'Studio TBA, Bilthoven', price: '€75',
          desc: 'Groot papier, natte pigmenten, hele armen. Schilderen wordt choreografie. Schorten aanwezig.',
          accent: 'sand', dot: 'Zondagmiddag',
        },
      ] as Workshop[],
      seats: 'plekken vrij',
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
        'Evera is in 2026 opgericht als een ruimte gewijd aan één idee: dat kunstenaars beter werk maken, en lichter staan in hun vak, wanneer ze creëren vanuit het lichaam. De workshops zijn klein, traag en warm. Iedereen gaat naar huis met iets gemaakts.',
      ],
      creds: [
        ['2015·2020', 'Bachelor Fysiotherapie, THIM'],
        ['2016·2021', 'Yogadocent, Fit For Free Utrecht'],
        ['2021·2026', 'Fysiotherapeut, YorBody & Weerdsingel West'],
        ['2025·2028', 'Somatisch Bewegingsdocent, EMOVE Institute'],
      ] as [string, string][],
      pull: 'Eerst bewegen. Dan maken.',
      portraitAlt: 'Portret van Michelle in de studio',
      portraitCaption: 'Yun Ki Michelle · Utrecht',
    },
    archive: {
      eyebrow: 'Uit het archief',
      headLead: 'Een jaar van',
      headEm: 'kringen.',
      desc: 'Documentatie van eerdere workshops, residenties en stillere studiodagen.',
      tiles: [
        { ttl: 'Beweeg & Schrijf, Antwerpen', tag: 'Oktober 2025', video: false, img: 'michelle-move-stretch.jpg' },
        { ttl: 'Solo ochtendpraktijk', tag: 'Film, 2025', video: true, img: 'michelle-portrait-golden.jpg' },
        { ttl: 'Stemkring, schets', tag: 'Tekening', video: false, img: 'michelle-portrait-nature.jpg' },
        { ttl: 'Groepssessie, Studio Noord', tag: 'Documentatie', video: false, img: 'michelle-move-forest.jpg' },
        { ttl: 'Hoe beweegt rouw?', tag: 'Film, 2024', video: true, img: 'michelle-move-scarf.jpg' },
        { ttl: 'Letteren op de vloer', tag: 'Studiodagboek', video: false, img: 'michelle-portrait-garden.jpg' },
      ],
    },
    voices: {
      eyebrow: 'Wat mensen zeggen',
      headLead: 'Stemmen uit de',
      headEm: 'kring.',
      list: [
        {
          text: 'Tegen de tijd dat we onze pennen oppakten, was het schrijven al in beweging. Ik vertrok met drie pagina\'s die ik aan mijn bureau nooit had gevonden.',
          name: 'Iris van der Wal', role: 'Schrijver · Beweeg & Schrijf',
        },
        {
          text: 'Michelle houdt de ruimte met zoveel warmte. Mijn stem kwam aan op plekken waar ik jaren naar had geleund.',
          name: 'Daan Hofman', role: 'Zanger · Beweeg & Zing',
        },
        {
          text: 'Het veranderde hoe ons gezelschap repeteert. Precies, gul en op een of andere manier ook speels.',
          name: 'Sara El-Amrani', role: 'Artistiek Leider, Kollektiv 8',
        },
      ],
    },
    booking: {
      eyebrow: 'Reserveer een plek',
      headLead: 'Houd een plek in de',
      headEm: 'kring.',
      stepsLabel: 'Stappen',
      steps: [
        { title: 'Workshop', sub: 'Kies een kring' },
        { title: 'Plekken', sub: 'Hoeveel?' },
        { title: 'Gegevens', sub: 'Vertel iets' },
        { title: 'Bevestig', sub: 'Bekijk & verstuur' },
      ],
      stepHeads: [
        { lead: 'Welke', em: 'kring?' },
        { lead: 'Hoeveel', em: 'plekken?' },
        { lead: 'Wat', em: 'details.' },
        { lead: 'Bijna', em: 'klaar.' },
      ],
      helpers: [
        'Elke workshop heeft maximaal acht plekken. Kies de kring die je roept.',
        'De meesten komen alleen. Sommigen brengen iemand mee. Maximaal vier per reservering.',
        'Zodat we weten wie er komt en wat we voorbereiden.',
        'Neem nog een laatste kijkje. We bevestigen binnen een dag per mail.',
      ],
      seatsLabel: 'Aantal plekken',
      next: 'Verder',
      back: 'Terug',
      send: 'Verstuur reservering',
      doneTitle: 'Geboekt.',
      doneTitleEm: 'Tot snel.',
      doneBody: 'Je plek is gereserveerd. Je hoort binnen een dag met betaalgegevens en wat mee te nemen. Drink ondertussen wat water en let op je schouders.',
      doneCta: 'Terug naar Evera',
      summary: ['Workshop', 'Datum', 'Plekken', 'Naam', 'E-mail'],
      fields: { name: 'Je naam', email: 'E-mail', phone: 'Telefoon (optioneel)', note: 'Iets te delen?' },
    },
    foot: {
      newsletter: {
        eyebrow: 'Trage brief',
        headLead: 'Veld',
        headEm: 'notities',
        headTail: ', eens per seizoen.',
        desc: 'Een rustige mail per seizoen met de volgende workshops, een leestip en een beweging voor thuis. Geen verkoop. Uitschrijven kan altijd.',
        placeholder: 'jij@ergens.com',
        cta: 'Abonneren',
        done: 'Dank je. Kijk in je inbox.',
      },
      contact: {
        eyebrow: 'Bezoek & contact',
        headLead: 'Kom ons',
        headEm: 'vinden.',
        desc: 'Voor vragen over workshops, samenwerkingen, pers of om Evera in jouw studio te ontvangen.',
        rows: [
          ['E-mail', 'hello@evera.studio', 'mailto:hello@evera.studio'],
          ['Studio', 'Utrecht & Bilthoven (locatie bij boeking)', ''],
          ['Instagram', '@evera.studio', 'https://instagram.com/evera.studio'],
          ['Brief', 'fieldnotes.evera.studio', '#'],
        ] as [string, string, string][],
      },
    },
    footer: {
      bigLead: 'Beweeg',
      bigEm: 'eerst.',
      bigTail: ' Maak daarna.',
      meta: ['© 2026 Evera Studio', 'Met zorg gebouwd in Utrecht', 'Colofon'],
    },
  },
} as const;
