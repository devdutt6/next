import { useState } from "react";
import { useRouter } from "next/router";

function Events({eventso}){
  let [events, setEvents] = useState(eventso);
  let router = useRouter();

  let fetchSports = async () => {
    let resp = await fetch('http://localhost:4000/events?category=sports');
    let events = await resp.json();
    setEvents(events);
    router.push('/events?category=sports', undefined, { shallow: true });
  }

  return (<>
    <h1>Events List:</h1>
    <button onClick={fetchSports}>Sports</button>
    {
      events.map(event => {
        return (
          <div key={event.id}>
            <p>{event.id} {event.title} | {event.category} on {event.date}</p>
          </div>
        )
      })
    }
  </>)
}

export default Events;

export async function getServerSideProps(context) {
  let { query } = context;
  let { category } = query;
  let qs = category ? 'category=sports' : "";
  let resp = await fetch(`http://localhost:4000/events?${qs}`);
  let eventso = await resp.json();

  return {
    props: {
      eventso
    }
  }
}