export const categories = [
  {
    slug: "business",
    label: "Business",
    description:
      "The cedi, the markets, cocoa, gold and the shops that set the price of a Ghanaian week.",
  },
  {
    slug: "technology",
    label: "Technology",
    description:
      "Mobile money, startups and the cables that decide who gets to be online outside Accra.",
  },
  {
    slug: "lifestyle",
    label: "Lifestyle",
    description:
      "How the city eats, dresses, dances and watches itself — from Osu to the highlife floor.",
  },
  {
    slug: "politics",
    label: "Politics",
    description:
      "Parliament, the districts, the courts and the institutions Accra is asking to grow up.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: CategorySlug;
  author: string;
  role: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  readTime: string;
};

type ArticleInput = Omit<Article, "readTime">;

const stories: ArticleInput[] = [
  {
    slug: "cedi-finds-its-footing",
    title: "The cedi’s quieter year, and the city learning to trust it",
    excerpt:
      "After the panic years, Accra’s shops, treasurers and market women are pricing the week in a calmer currency. The test is whether the calm holds past Christmas.",
    category: "business",
    author: "Ama Serwaa Mensah",
    role: "Business editor",
    date: "2026-10-24",
    location: "Accra",
    image: "/images/ecobank.jpg",
    imageAlt: "Ecobank Ghana’s glass head office in Accra",
    imageCredit: "Fquasie / Wikimedia Commons, CC BY-SA 4.0",
    body: [
      "On the Ring Road, the bureau de change boards are still there. What has changed is the handwriting. The numbers are no longer rewritten three times before noon, and the men who used to shout rates at passing traffic now spend more of the morning on their phones, checking whether the Bank of Ghana’s calm is real or just a pause.",
      "For two hard years the cedi was the country’s mood. Importers in Abossey Okai priced spare parts as if the dollar might jump before the container left Tema. Landlords in East Legon wrote leases in foreign currency and called it prudence. Market women in Makola did the arithmetic in their heads and passed it on in the price of tomatoes. A national currency is a public promise. For a while, that promise was expensive to believe.",
      "This autumn the promise is quieter. Inflation, which tore through household budgets after the debt crisis, has eased enough that shopkeepers talk about margins again instead of survival. The Bank of Ghana has kept policy tight — the kind of boring restrictiveness that does not trend and does a great deal of work. Treasury managers at the banks describe a market that still flinches at bad news, but no longer assumes bad news every Friday.",
      "None of this is a victory lap. Ghana’s recovery sits on a narrow ledge: cocoa earnings, gold, oil from the Jubilee and TEN fields, and a debt restructuring that bought time rather than comfort. The IMF programme that framed the worst years is no longer the only story in the room, but the habits it forced — publish the numbers, narrow the deficit, stop treating arrears as a strategy — are still the habits that keep the cedi from remembering its old panic.",
      "In Kaneshie, spare-parts dealer Joseph Appiah has started quoting some stock in cedis again, with the dollar as a footnote rather than the headline. “Customers were tired of a price that expired,” he said on Tuesday, tapping a calculator that has seen better seasons. “If the rate is still this number on Friday, I will order the next container without adding fear on top.”",
      "That is the whole story, reduced to a shop floor. Accra can live with a firm cedi. It is still learning to live without the fear.",
    ],
  },
  {
    slug: "parliament-crowded-docket",
    title: "Parliament returns to a docket crowded with money and the constitution",
    excerpt:
      "The House is back in Accra with bills on public spending, local power and the rules that govern both. Members expect a loud term, and a public that is keeping the receipts.",
    category: "politics",
    author: "Kwame Boateng",
    role: "Political correspondent",
    date: "2026-10-23",
    location: "Accra",
    image: "/images/independence-square.jpg",
    imageAlt: "The independence monument at Black Star Square in Accra",
    imageCredit: "Nana Kwandoh / Unsplash",
    body: [
      "The chamber fills the way it always does after a recess: hurriedly, with greetings that are half politics and half gossip, and with an order paper that looks calm only because the arguments have not started.",
      "This session, the arguments have a familiar spine. How much of the budget still belongs to debt service. How the districts spend what Accra sends them. How far a government elected on a promise to reset institutions should go in rewriting the rules those institutions use. The 1992 Constitution has survived louder fights than this one. It has also collected, in the view of almost everyone who has to operate it, a list of repairs that Parliament keeps scheduling and rarely finishes.",
      "On the economic side, the Finance Ministry’s numbers will be tested in committee rooms that smell of paper and air conditioning. The minority wants the recovery narrated with its bruises intact: the shops that never reopened, the contractors still owed for roads, the phrase “cocoa roads” that has outlived too many budgets. The majority wants those bruises set next to what has improved — a currency that no longer embarrasses the country at the airport exchange, and a budget that can be read without a sense of impending theatre.",
      "Away from the set-piece debate, smaller bills may matter more. Procurement rules. The status of metropolitan, municipal and district chief executives. The tedious machinery of the public accounts. Ghana’s loud politics often happens on the floor. Its expensive politics happens in the clauses that decide who signs for the money.",
      "Outside, on the High Street side of the precinct, a vendor selling plantain chips watched the cars turn in and offered the judgement of someone who has seen many sessions begin. “They will talk,” she said. “We will know it worked if the light bill makes sense.”",
    ],
  },
  {
    slug: "mobile-money-rails",
    title: "Ghana’s mobile-money rails now carry more than cash",
    excerpt:
      "What began as a way to send cedis home has become the country’s everyday financial system, from Makola stalls to the ministries.",
    category: "technology",
    author: "Efua Darko",
    role: "Technology correspondent",
    date: "2026-10-22",
    location: "Accra",
    image: "/images/accra-street.jpg",
    imageAlt: "A busy commercial street crowded with people in Accra",
    imageCredit: "Kofi Bhavnani / Unsplash",
    body: [
      "The queue at the mobile-money kiosk still starts before the shop has fully opened. A teacher tops up. A driver sends a fare’s worth of cedis to an owner he will not see until evening. A student pays a hall fee that, five years ago, would have meant a bank and a lost morning. The kiosk is a wooden box, a phone, a float and a person who knows everyone’s name. It is also a branch of the national economy.",
      "Ghana did not invent mobile money, but it normalised it with unusual speed. Interoperability through GhIPSS means a wallet on one network can find a wallet on another. The Ghana Card stitched identity to SIM cards and, increasingly, to accounts. Merchants who once wrote numbers in a notebook now accept a push payment and trust the message that follows. In Accra the habit is so ordinary that a market which still insists on cash feels like a choice, not a default.",
      "The next argument is about what rides on those rails. Wages for casual work. School fees. Health-insurance prompts. Government payments that used to vanish into a counter and a stamp. Startups in East Legon and Airport City pitch themselves as layers on top of the float: bookkeeping for the chop bar, credit for the trader whose sales the wallet already understands, insurance that pays out to a phone.",
      "There is a cost to a system this central. Fraud follows the float. The networks and the National Communications Authority spend an unglamorous amount of time on SIM-swap scams and scripts that begin with “I am calling from your bank.” Agents in smaller towns still run out of cash on the days everyone wants to withdraw. A rail is not a bank, and a phone is not a regulator.",
      "Still, stand at Madina or Kejetia and the direction is obvious. The cedi moves as a message now. The country is building on top of that fact, whether the glass towers are ready or not.",
    ],
  },
  {
    slug: "accra-after-dark",
    title: "Independence Avenue after dark: how Accra eats now",
    excerpt:
      "From chop bars that never closed to rooms that only open at nine, the capital’s table has become the city’s real nightlife.",
    category: "lifestyle",
    author: "Nana Yaa Owusu",
    role: "Lifestyle editor",
    date: "2026-10-21",
    location: "Accra",
    image: "/images/dining.jpg",
    imageAlt: "Plates set for a late evening meal",
    imageCredit: "Jay Wennington / Unsplash",
    body: [
      "Accra has always eaten late. What changed is the confidence. A decade ago the serious meal was still a Sunday at home, or a hotel buffet priced for a conference. The chop bar did the honest work in between: kenkey and fried fish, waakye before the traffic, a ball of banku that did not need a review. Those places never left. They have been joined by rooms that treat Ghanaian food as a night out rather than a necessity.",
      "Along Oxford Street and the quieter stretches of Labone and Cantonments, menus now assume the diner knows jollof is an argument, not a side. Red red arrives on ceramic. Grilled tilapia is plated, not dumped. A new cohort of cooks — some trained abroad, many trained by aunties who would laugh at the word “concept” — is writing the city down in pepper and palm oil. The 24-hour economy is a policy in Jubilee House. In Osu it is already a kitchen that refuses to close while the speakers are on.",
      "The prices are a second story. A calm cedi has made imported wine less of a gamble, but the lettuce still comes and goes, and the power bill remains a character in every restaurant’s accounts. Chefs talk about local farms in Aburi with the same seriousness they used to reserve for a supplier in Europe. It is partly fashion. It is also arithmetic.",
      "Not everyone is at the new tables. The queue at a waakye joint off the Spintex Road at 7am is still the more accurate census of the city. What the two scenes share is standards. Accra is done apologising for its own plate. The argument now is only about who can afford to sit down, and how long the light stays on while they do.",
    ],
  },
  {
    slug: "cocoa-main-crop",
    title: "Cocoa farmers ask for a farmgate price that survives the season",
    excerpt:
      "In the Western North, the main crop is a negotiation: swollen shoot, ageing trees, and a world price that rarely arrives in the village intact.",
    category: "business",
    author: "Kofi Asare",
    role: "Senior reporter",
    date: "2026-10-20",
    location: "Sefwi Wiawso",
    image: "/images/cocoa-pods.jpg",
    imageAlt: "Ripe cocoa pods growing from a tree trunk",
    imageCredit: "Sebastian Schuster / Unsplash",
    body: [
      "The pods on the older trees around Sefwi Wiawso are fewer than the farmers remember, and everybody has a theory. Swollen shoot. Tired soil. Young people who would rather ride a motorcycle to town than spend a life under a canopy. A farmgate price that felt like a favour in September and like an insult by the time the beans were dry.",
      "Cocoa is still Ghana’s most emotional export. It built schools, scholarships and a national idea of itself as a country that the world tastes. COCOBOD remains the institution through which that idea is priced. Farmers do not speak about it the way speeches do. They speak about the gap between the figure announced in Accra and the figure that survives the clerk, the bag, the road and the week of rain.",
      "This main crop, the talk under the sheds is practical. Who will spray. Who can afford the fertiliser that arrived late. Which footpath has finally been graded and which one will swallow a truck if the rain keeps its promise. Smuggling into Côte d’Ivoire is discussed the way weather is discussed: not approved, simply observed, and worse in any year the prices on the two sides of the border refuse to match.",
      "Auntie Adwoa Mensah, who has farmed the same slope since the 1990s, is not romantic about any of it. “The tree does not know about a press conference,” she said, splitting a pod with a cutlass and checking the beans the way a teller checks notes. “Pay us before the season is a memory. Then come and talk about the future of cocoa.”",
      "Accra needs the future. Chocolate companies need the beans. The Western North needs a price that can hire a young person for one more year. Between those needs is a road, a disease, and a very old argument about who keeps the value.",
    ],
  },
  {
    slug: "accra-startups",
    title: "Built in Accra, sold to Lagos, Nairobi and the shop next door",
    excerpt:
      "A generation that learned its trade at MEST and in small Airport City rooms is writing software for the continent, not just the capital.",
    category: "technology",
    author: "Adjoa Quaye",
    role: "Technology reporter",
    date: "2026-10-19",
    location: "Airport City, Accra",
    image: "/images/team.jpg",
    imageAlt: "A team working around laptops in a bright room",
    imageCredit: "Unsplash",
    body: [
      "The pitch decks have grown up. Five years ago an Accra startup introduced itself as “the Uber of” something and waited for a foreign fund to nod. The better rooms in Airport City now start somewhere less flattering and more useful: a merchant who already takes mobile money, a clinic that loses files, a courier who cannot prove the parcel arrived. The product is whatever removes that specific Ghanaian headache, and then the same headache in Kumasi, Kigali or Ibadan.",
      "MEST still sits in the origin story of half the founders you meet, but the path after the programme is less of a fairy tale. Rents in the glossy buildings are real. Power is a line item with a generator attached. Talent is excellent and constantly being hired away by a bank or a company abroad. The founders who last are the ones who can sell to a Ghanaian business that pays slowly and a Kenyan business that pays in a different currency, without pretending those are the same sale.",
      "Payments remain the gravity of the scene. Hubtel, Zeepay and the mobile-money networks proved that Accra could move money at a national scale. The new companies stand on that proof. Selorm Agbeti, who runs a small bookkeeping tool for provision shops, says his users do not want another wallet. “They already have a wallet,” he said. “They want yesterday’s sales to agree with today’s cash. If I can do that in Madina, I can do it in Abuja.”",
      "Government digitisation — the Ghana Card, Ghana.gov, the slow migration of permits onto screens — has given startups both a customer and a caution. A state contract can feed a company for a year and distract it from the product for two. The smarter founders treat the public sector as one channel, not the business model.",
      "Accra is not trying to be San Francisco. It is trying to be the place West Africa ships software from. On the evidence of the rooms that are still here after the cheap-money years, it has a serious claim.",
    ],
  },
  {
    slug: "kente-runway",
    title: "Kente on the runway, and the designers taking Accra’s cloth abroad",
    excerpt:
      "Glitz season is back. The cloth is old. The ambition — a buyer in Paris who pays on time — is new, and very specific.",
    category: "lifestyle",
    author: "Abena Nyarko",
    role: "Culture correspondent",
    date: "2026-10-18",
    location: "Accra",
    image: "/images/ghana-fashion.jpg",
    imageAlt: "A couple in formal Ghanaian dress at a wedding in Accra",
    imageCredit: "Patrick Amofah / Unsplash",
    body: [
      "There is a sound a well-cut kente makes when the wearer turns, and Accra Fashion’s busiest week is built around it. The cloth itself is not a trend. Bonwire and the other weaving towns have been supplying chiefs, churches and graduations for generations. What is newer is the insistence that the same cloth can enter a global wholesale calendar without being treated as a costume.",
      "Backstage, the conversation is about lead times. A buyer in London wants a capsule. A weaver in the Ashanti Region can produce beauty faster than a factory can produce consistency, and not always the other way around. Designers who grew up watching Glitz Africa turn a local show into a broadcast now talk about size charts, duties and whether a stripe will read on a phone screen. The romance is still in the room. The invoice is what decides if the room exists next year.",
      "Young labels are also refusing the old split between “traditional” Friday and “modern” Saturday. Tailoring in Accra has always mixed both. A suit jacket over kente, a dress that quotes a northern smock, beads from the market sitting on a neckline that could land in any capital. The designers did not discover this mixture. They stopped asking permission for it.",
      "The audience has changed with them. Diaspora Ghanaians fly in for the shows and leave with more than photographs. Department stores that once wanted a single “African” rack are being asked, firmly, to learn the difference between one country’s cloth and a continent’s. It is slow teaching.",
      "On the night itself none of that is visible from the third row. The light hits the cloth, somebody’s auntie starts a video, and the city remembers that it has always known how to dress. The work, as usual, begins the morning after, when the orders are either real or they are not.",
    ],
  },
  {
    slug: "makola-at-dawn",
    title: "Makola at dawn still sets the price of the Accra week",
    excerpt:
      "Before the offices open, the market has already decided what the city will pay for rice, tomatoes and patience.",
    category: "business",
    author: "Ama Serwaa Mensah",
    role: "Business editor",
    date: "2026-10-16",
    location: "Makola, Accra",
    image: "/images/ghana-market.jpg",
    imageAlt: "Traders gathered in a colourful Ghanaian market",
    imageCredit: "Ato Aikins / Unsplash",
    body: [
      "By five in the morning Makola has already held its most important meeting. The trucks are in. The sacks have been argued over. A price that will be repeated, with small edits, from Kaneshie to Madina by lunchtime has been settled between people who do not need a microphone.",
      "Economists describe price transmission. Traders describe Tuesday. If the tomato crate came in high because the road from the producing towns was bad, the chop bar will know before the radio does. If a shipment of rice is late at Tema, the rumour moves through the alleys faster than a press release from any ministry. Makola is not informal in the sense of being casual. It is informal in the sense that its rules are enforced by reputation, credit and the threat of tomorrow.",
      "Credit is the hidden balance sheet. Many stalls are financed by suppliers who are financed by someone else, a chain of trust that a bank would call risky and a market calls Tuesday-to-Tuesday. When the cedi was panicking, that chain shortened. People wanted cash before dusk. A calmer currency has lengthened it again, which is another way of saying trust is a financial indicator.",
      "The city has tried, more than once, to tidy Makola into a plan. Some of the tidying was necessary. Fires, blocked drains and pavements you cannot walk are not culture; they are failure. The traders’ suspicion is older than the latest plan. They have seen “relocation” used as a word for disappearance. Any redesign that does not begin with the women who actually move the goods will be a drawing.",
      "Walk through at dawn and the drawing is unnecessary. The week’s prices are already on their way to the rest of Accra, carried in a head pan, a trotro and a voice.",
    ],
  },
  {
    slug: "gold-and-lithium",
    title: "Gold, lithium and the towns sitting on Ghana’s next argument",
    excerpt:
      "From the pits of the Western Region to the lithium fields at Ewoyaa, the boom is never only about the mineral in the ground.",
    category: "business",
    author: "Yaw Mensima",
    role: "National correspondent",
    date: "2026-10-14",
    location: "Takoradi",
    image: "/images/gold.jpg",
    imageAlt: "Close view of raw gold",
    imageCredit: "Unsplash",
    body: [
      "Gold has paid for a great deal of Ghana, and it has also dug a great deal of Ghana up. The legal mines — the big pits run by companies the stock exchange can name — sit inside a regulation, a community agreement and a royalty. Around them, and sometimes on top of concessions that exist mostly on paper, is galamsey: the word the country uses when small-scale mining has slipped its permit and started eating rivers.",
      "The environmental bill is no longer a future tense. Farmers point at water the colour of rust. Water companies talk about treatment costs. Politicians of every party have declared a war on illegal mining and then discovered that the people inside the pits are also voters, also broke, and also faster than a task force. A serious policy has to offer those towns a wage that is not a riverbank. So far the wage has been mostly a speech.",
      "Lithium is the newer sentence in the same paragraph. The Ewoyaa project in the Central Region is discussed in Accra as a ticket into the battery century. In the communities nearest the ground, it is discussed as land, dust, jobs and the fear of becoming a story that happens to other people. Ghana has exported raw ore before. The argument this time — refine more of it here, publish the terms, do not call a hole in the ground a transformation — is the argument the country wishes it had won with gold and oil.",
      "Takoradi knows that wish personally. The oil years brought hotels, a certain kind of traffic and a lesson: a resource can lift a skyline without lifting a household. Local business associations are sharper now. They ask who the subcontractors are. They ask where the trainees go after the photograph.",
      "The ground will be dug either way. The only live question is whether the towns on top of it recognise themselves in the accounts.",
    ],
  },
  {
    slug: "last-mile-outside-accra",
    title: "Fibre, 5G and the last mile outside Accra",
    excerpt:
      "The capital streams without thinking. Plenty of district capitals still bargain with a signal bar and a patient modem.",
    category: "technology",
    author: "Efua Darko",
    role: "Technology correspondent",
    date: "2026-10-12",
    location: "Tamale",
    image: "/images/servers.jpg",
    imageAlt: "Lit racks of network equipment in a data room",
    imageCredit: "Taylor Vick / Unsplash",
    body: [
      "In Accra, a video call is an assumption. In parts of the Northern Region it is still a plan. The national maps of coverage look generous until you leave the corridor where the towers were worth building first. 4G did the heavy lifting of the last decade. 5G, launched with ceremony in the big cities, is a real upgrade for a hospital in Airport City and a rumour for a senior high school an hour off the Tamale road.",
      "The National Communications Authority and the operators can both produce numbers that are true and incomplete. Population coverage is not the same as a link that stays up when it rains, or a price a teacher can pay after rent. Fibre has crept along the major routes. The last mile — the unglamorous stretch from the cabinet to the compound — is where the country’s digital ambition goes to wait.",
      "That wait has a cost that does not show up as an outage. A student submits an assignment at midnight because the evening was too slow. A clinic stores records on a laptop that cannot sync. A trader in the Tamale market uses mobile money happily and then loses an hour trying to upload a document a ministry has decided must be digital. The country digitised the demand faster than it built the road.",
      "Engineers talk about sharing towers, satellite backup and the dull work of powering rural sites when the grid blinks. None of it is a keynote. All of it is the difference between a Ghana Card system that works in a district office and one that works only when the officer’s phone has a personal bundle.",
      "Accra can keep streaming. The republic is not online until Tamale, Bolga, Ho and the towns that do not make the advert can do the same thing without negotiating with the weather.",
    ],
  },
  {
    slug: "highlife-full-volume",
    title: "Highlife never left. A new Accra just turned the speakers up",
    excerpt:
      "Between the old dance bands and the rap that now soundtracks the city, nightlife is arguing with its parents — and dancing anyway.",
    category: "lifestyle",
    author: "Abena Nyarko",
    role: "Culture correspondent",
    date: "2026-10-11",
    location: "Accra",
    image: "/images/microphone.jpg",
    imageAlt: "A microphone on a stand in a dark room",
    imageCredit: "Unsplash",
    body: [
      "Ask for the sound of Accra and you will start a fight. One table will say highlife, and they will mean the guitars, the horns, the songs their parents played when a sitting room was the venue. Another table will say the rap and afrobeats that now leak out of every passing car: Black Sherif, Sarkodie, Stonebwoy, King Promise, a dozen voices the algorithm thinks it discovered. Both tables are describing the same city. They are refusing to admit it.",
      "The bands did not vanish. They moved to funerals, to hotels, to the kind of Sunday where somebody’s uncle insists on a live set and will not be managed. What the new rooms added is volume and a shorter path from a bedroom in Kasoa to a playlist in London. The argument about “real music” is mostly an argument about whose youth gets to be the default.",
      "Promoters will tell you the harder problem is not taste. It is doors, power and whether the artist is paid before the generator drinks the profit. A calm stretch for the cedi helps a touring act budget a bus. It does not fix a venue culture that still treats sound engineers as optional. The shows that feel expensive are often just the shows that rehearsed.",
      "On a good night the split in the crowd disappears by the third song. Somebody’s mother knows the chorus the teenagers came for. Somebody’s teenager is surprised to like the highlife record that comes on while the band changes over. Accra has always been a dance floor with opinions. The opinions are the tradition. The dancing is the point.",
    ],
  },
  {
    slug: "ghanaian-screens",
    title: "Ghana’s screens are finally showing Ghana, and the audience stayed",
    excerpt:
      "From Kumawood energy to Accra series built for the phone, local film has stopped apologising for its own accent.",
    category: "lifestyle",
    author: "Nana Yaa Owusu",
    role: "Lifestyle editor",
    date: "2026-10-09",
    location: "Accra",
    image: "/images/cinema.jpg",
    imageAlt: "Seats in a darkened cinema",
    imageCredit: "Unsplash",
    body: [
      "For years the industry was described as a problem to be solved: too fast, too local, not enough like somebody else’s cinema. Audiences ignored the description. They filled video halls, then living rooms, then phone screens, for stories in which the joke landed without a footnote. Kumawood understood this earlier than the panels did. A film did not need permission to be about the people who were going to watch it.",
      "The newer Accra productions have more cameras, more time and, occasionally, more money. Streaming gave them a shelf that a DVD seller in Kaneshie could not. What they borrowed from the older industry, when they were wise, was speed and a refusal to translate every proverb. The series that travel are not the ones that explain Ghana to a stranger. They are the ones a stranger can keep up with because the emotions are finished, even when the Twi is not subtitled yet.",
      "Money is still the unromantic lead. A producer can find a cast in a week and a completion fund in a year. Brands want placement. Platforms want exclusivity. Cinemas in Accra want a Friday that is not only Hollywood. The audience, asked directly, wants all of it and will pirate the version that arrives late. That is not a moral puzzle unique to Ghana. It is what happens when demand is ahead of distribution.",
      "The encouraging part is no longer theoretical. People will sit down for a Ghanaian story on a Ghanaian screen. The work now is dull and decisive: contracts, residuals, cinemas outside the capital, and editors who are allowed to take the extra week. The accent was never the obstacle. The infrastructure was.",
    ],
  },
  {
    slug: "district-microphone",
    title: "The districts want the decision, not just the minutes",
    excerpt:
      "Local government in Ghana has always had the meetings. This year the assemblies are asking Accra to share the actual power.",
    category: "politics",
    author: "Kwame Boateng",
    role: "Political correspondent",
    date: "2026-10-08",
    location: "Kumasi",
    image: "/images/accra-traffic.jpg",
    imageAlt: "Traffic and roadside vendors on a street in Accra",
    imageCredit: "Wikimedia Commons",
    body: [
      "Every serious person in Ghanaian politics can give a speech about decentralisation. Fewer can point to a district assembly that controls enough money, enough staff and enough permission to fix the drainage it is blamed for. The meetings happen. The minutes are impeccable. The excavator, too often, is still waiting on Accra.",
      "Kumasi makes the contradiction obvious. The city is large enough to have the problems of a capital and the powers of a subordinate. Traders, transport unions and assembly members describe the same loop: a local vote, a local plan, a letter to a ministry, a silence, a rainy season. When the work finally appears, the ribbon is sometimes cut by someone who did not attend the meeting where the ditch was named.",
      "The argument over how metropolitan, municipal and district chief executives get their jobs is really an argument about that ribbon. If the centre appoints the person who must answer to the assembly, the assembly learns to perform oversight without expecting obedience. Supporters of the current arrangement say a country with Ghana’s history cannot turn every district into a separate republic. Critics say the country already has the republic. It is just not trusted with the cheque book.",
      "There are assemblies that work anyway: a revenue officer who knows the property rates, an engineer who has stopped waiting for the perfect grant. They are treated as miracles. They should be treated as the job. A calmer national budget helps them only if the transfer arrives in the quarter it was promised, and if procurement rules are strict without being a reason to do nothing.",
      "The microphone has always been in the districts. The decision is what Accra still holds. This session of Parliament will be judged, in places far from the chamber, on whether that changes by even one signature.",
    ],
  },
  {
    slug: "who-commands-belief",
    title: "Courts, Jubilee House and a year of institutional stress tests",
    excerpt:
      "Ghana’s recovery is not only a budget story. It is a question of which office still has the public’s belief when the ruling is unpopular.",
    category: "politics",
    author: "Yaw Mensima",
    role: "National correspondent",
    date: "2026-10-06",
    location: "Accra",
    image: "/images/court.jpg",
    imageAlt: "The facade of a courthouse with columns",
    imageCredit: "Unsplash",
    body: [
      "A currency can stabilise and a country can still feel unfinished. That is the quieter political fact of this year in Accra. The arguments that fill radio are about prices, fuel, the light. Under them is an older argument about offices: Jubilee House, Parliament, the courts, the commission that investigates, the auditor who is supposed to embarrass people. Which of them can still make a powerful person change course?",
      "The courts have carried a heavy share of that question. Election petitions taught a generation to watch the Supreme Court the way their parents watched a rally. Ordinary cases teach a less televised lesson. A land dispute that takes a decade, a commercial judgement that cannot be enforced, a criminal matter that moves at the speed of a missing docket — these are where belief is kept or spent. Judges speak, correctly, about independence. Litigants speak about Tuesday, and whether Tuesday will produce an order anybody obeys.",
      "The presidency has its own test. A government that campaigned on resetting institutions inherits the suspicion that every reset is a purge. Publishing more data, letting Parliament be dull and difficult, allowing a regulator to fine a friend: these are not cinematic. They are the only evidence that survives contact with a cynical public. Ghanaians have watched promises of a new administrative culture before. They are expert at the difference between a launch and a habit.",
      "Civil society and the newsrooms still supply some of the friction the system needs. So do the professional bodies, when they choose the awkward statement over the comfortable lunch. None of them is a substitute for a court order that bites or a budget that matches the speech.",
      "Belief is a reserve, like foreign exchange. Ghana spent a lot of it in the crisis years. It comes back, if it comes back, one boring lawful decision at a time.",
    ],
  },
];

function readingTime(body: string[]) {
  const words = body.join(" ").trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

const articles: Article[] = stories.map((story) => ({
  ...story,
  readTime: readingTime(story.body),
}));

export const navLinks = [
  ...categories.map((category) => ({
    href: `/category/${category.slug}`,
    label: category.label,
  })),
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function categoryLabel(slug: string) {
  return categories.find((category) => category.slug === slug)?.label ?? slug;
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getArticles() {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getByCategory(slug: CategorySlug) {
  return getArticles().filter((article) => article.category === slug);
}

export function getRelated(slug: string, count = 3) {
  const current = getArticle(slug);
  if (!current) return [];

  const sameCategory = getArticles().filter(
    (article) => article.category === current.category && article.slug !== slug,
  );
  const others = getArticles().filter(
    (article) => article.slug !== slug && article.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, count);
}

export function searchArticles(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return getArticles().filter((article) => {
    const haystack = [
      article.title,
      article.excerpt,
      article.author,
      article.location,
      article.category,
      categoryLabel(article.category),
      ...article.body,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(needle);
  });
}
