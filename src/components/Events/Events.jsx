import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSearch } from 'hooks/useSearchField';
import { getEvents } from 'utils/getEvents';
import { sortEvents } from 'utils/sortEvents';
import EventListCardItem from 'components/EventListCardItem';

import PageSkeleton from 'components/PageSkeleton';
import { EventList } from './Events.styled';

const Events = ({ category, sortBy }) => {
  const [events, setEvents] = useState([]);
  const linkLocation = useLocation();
  const { searchField } = useSearch();
  const [isLoading, setIsLoading] = useState(true);

  const searchedEvents = events.filter(
    event =>
      event.title.toLowerCase().includes(searchField?.toLowerCase()) ||
      event.description.toLowerCase().includes(searchField?.toLowerCase())
  );

  const filteredEvents = searchedEvents.filter(
    event =>
      event.category.value?.toLowerCase() === category?.toLowerCase() ||
      category === ''
  );
  const sortedEvents = sortEvents(filteredEvents, sortBy);

  useEffect(() => {
    (async function getEventsList() {
      const data = await getEvents();
      setEvents(data);
      setIsLoading(false);
    })();

    return () => {};
  }, []);

  return (
    <>
      {events ? (
        <EventList>
          {sortedEvents.map(card => (
            <EventListCardItem
              key={card.id}
              card={card}
              linkLocation={linkLocation}
            />
          ))}
        </EventList>
      ) : (
        <PageSkeleton />
      )}
      {!isLoading && sortedEvents.length === 0 && <p>No such events yet</p>}
    </>
  );
};

export default Events;
