import PageSection from "./PageSection"

const Page = () => {
    // object to store individul header refs


    const topics = [
        {
            id: 1,
            heading: "Welcome to the chill zone",
            color: "#17202A",
            paragraphs: [
                "Do your own thing, and let others do theirs. If they're not hurting anyone, what's the problem? Chill people don't look for reasons or opportunities to hate on others just for being different. There's no reason to bully or tread on other people's territory. Try to be happy with yourself and encourage self-love in others, too and remember be yourself.",
                "Unless someone is rude to you, your day should go by smoothly by being polite, considerate, and nice. Chill people don't antagonize for the sake of it or stir up a bunch of negative emotions by being jerks; chill people are generally kind and get along well with others. However, try to avoid going overboard so you don't become a people-pleaser or pushover.",
                "Don't sweat the small stuff. Take your life in stride. Roll with the punches and be accepting of the little things life throws your way, reserving your passion for what matters to you most. This is pretty much the defining feature of a chill person."
            ]
        },
        {
            id: 2,
            heading: "Prepare your chill",
            color: "#1C2833",
            paragraphs: [
                "Be fun to hang out with. Don't be someone who is really boring and afraid to try new things. Go out and do stuff you consider fun and be someone that other people want to spend time with. Talk with people, go see movies, play games, go on hikes or go camping: it's all good!",
                "Make and follow your own trends. Be unique. A chill person doesn't feel the need to follow all the trends set by others, they just do what they want and what makes them happy. This laid back attitude inspires others to be more laid back and people will want to be around you more often.",
            ]
        },
        {
            id: 3,
            heading: "The best chills are those most chilled",
            color: "#212F3D",
            paragraphs: [
                "Pick your battles. Some things in life are bound to upset or anger you, and while it's okay to have those feelings, it's best not to nosedive into every argument that presents itself. Stop, take a deep breath, and decide whether an unpleasant situation is worth getting into. Catch yourself before you get stuck in a pointless argument or a big scene. From here, you can redirect the situation to be in your favor.",
                "Redirect your thoughts. Distract yourself from your immediate feelings by redirecting your thoughts. There are lots of ways you can do this. You can count your breaths. You can even sing a song (inside your head is probably better than out loud).",
            ]
        },
        {
            id: 4,
            heading: "Chill all day and night",
            color: "#273746",
            paragraphs: [
                "Chew some gum. Studies have shown that we can reduce a significant amount of stress by chewing gum. Pop a stick of that winter fresh if you’re just not feeling calm in the moment.",
                "Evaluate how much this matters. Think about how much your problem matters in the grand scheme of things. Will it still affect you a year from now? Does it even help to be so hard on yourself? If you made it out alive, chances are you’ll find a way to get through it and move on to more happiness and hardships.",
                "Do what your grandma would do. By the time we’re much older, we usually don’t get so worried when things don’t go our way, because we get used to it. Think of how your grandma would react in a situation and do that. She’d probably say something funny and then move on to the next thing, which is really the best thing to do if you want to stay sane."
            ]
        },
        {
            id: 5,
            heading: "When the chill gets chiller",
            color: "#2C3E50",
            paragraphs: [
                "Go somewhere else. If you just can’t handle the situation, take yourself out of it. No reason to stick around if you’re going to lose your cool and make some mistakes. Remove yourself from the room for a few minutes and then try again once you’ve managed to work through the initial anger or fear (or whatever you’re feeling).",
                "Stay away from toxic people and situations. Avoiding such things is the best way to be chill in life. Just say no to all the bullies, liars, and trash-talkers. You don’t need that in your life! Cut toxic people out of your life and don’t go around causing trouble yourself.",
                "Get proactive. There's a difference between being chill and being passive. Instead of sitting around thinking your problems could be worse, always try to make things better for yourself. It'll be a lot easier to be genuinely laid-back when you're satisfied with your life as opposed to settling for less."
            ]
        },
        {
            id: 6,
            heading: "Should I bring a jacket?",
            color: "#34495E",
            paragraphs: [
                "Maybe. But be confident. When you have lots of self confidence and comfort with who you are, you will have a much easier time being chill. You will know that it’s okay if you make a mistake, that it doesn’t make you worthless or something like that. You will know you can handle whatever crazy life manages to throw at you.",
                "Find enjoyment in life. Do things in life that make you happy. Don’t do things that stress you out just to accommodate others and not yourself. Doing things that make you happy will make you more calm and relaxed, helping you deal with all your problems in a better way.",
                "Ignore ignorant opinions. Not caring what others think will make many situations in your life less stressful, like arguments and rumors.",
                "Keep a sense of humor. You’ve got to laugh about stuff in life, especially the stuff that doesn’t go your way, or you’re going to spend life grumpy and stressed out. When someone is a jerk to you, relieve your anger through humor. Just laugh at them because they are clearly very boring and miserable."
            ]
        },
    ]

    return (

        <div>
            <div className="marquee-container">
                <div className="marquee marquee--top">
                    <div></div>
                </div>
                <div className="marquee marquee--right">
                    <div></div>
                </div>
                <div className="marquee marquee--bottom">
                    <div></div>
                </div>
                <div className="marquee marquee--left">
                    <div></div>
                </div>
            </div>

            <main className="page-content">
                <h1>My  <u>Top 3</u> favorite books</h1>
                <p>The chill zone is where all the things are copacetic. Think about all the unchill things in your life.  <em>Chill Zone</em>. The following passages of text are pulled from this <a href="https://www.wikihow.com/Be-Chill">wikiHow article</a>.</p>
                <div className="m-auto flex flex-row h-fit justify-between items-center md:w-[70%]  mt-16">
                    <div className="w-fit flex flex-col items-center">
                        <img src="/alien.svg" alt="alien-icon" width={150} />
                        <span>
                            Fiction
                        </span>
                    </div>

                    <div className="w-fit flex flex-col items-center">
                        <img src="/coffee.svg" alt="alien-icon" width={150} />
                        Non-Fiction
                    </div>
                </div>

                {topics.map((topic) => {

                    return (
                        <PageSection key={topic.id} topic={topic} />
                    )
                })}
            </main>
        </div>
    )
}

export default Page