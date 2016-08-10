# Proposal

## Minimum Viable Product

Muse is a web application inspired by SoundCloud, built on Rails and React.js.

Muse allows users to:

- [ ] Create and update a user account
- [ ] Sign In / Sign Out
- [ ] Upload and delete audio files
- [ ] Comment on tracks
- [ ] Stream tracks without interruption
- [ ] Add tracks to the audio playback queue
- [ ] Create, edit, or delete playlists
- [ ] Add tracks to or remove tracks from playlists
- [ ] Search for tracks by title


## Design
* [Database schema](./schema.md)

## Implementation Timeline

### Phase 1: User Authentication (0.5 days)

User signup and authentication will be handled in Rails using BCrypt. Upon signup, users will be redirected to a static page which will contain the application's root React component.

### Phase 2: Flux Architecture (0.5 days)

We will set up Flux, the React Router, and the React view structure for the main application. The music tracks will live in a Tracks Store.

### Phase 3: Tracks & Playlists (1 day)

Using an API for track uploads, we will add API routes to serve track URLs as JSON. We will add Playlist and Playlisting to allow users to create playlists and add tracks to playlists.

### Phase 4: Audio Playback & Stream Bar (1 day)

We will use the native HTML5 audio to stream the tracks. To test the audio stream, we will create a stream bar in the UI, which persists at the bottom of the page.

### Phase 5: Track Likes and Comments (1 day)

We will add new Comment and Like models for tracks. Corresponding routes, controllers, and views will be set up.

### Phase 6: Main Feed, Nav, Sidebar Views (2 days)

We will add the main page that the user will see after logging in. This feed
will contain followed users' tracks. The nav and sidebar views will be created.

### Phase 7: Cleanup (2 days)

Devote time to perfecting the UI.

### Bonus

- Popular tracks in feed
- User account email activation
- Playlist likes (polymorphic Like model)
- Following/Followers
- Equalizer UI
- Fancy animations
