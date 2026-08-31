# Notes App Storage Model

Notes should be treated as structured records rather than raw text blobs.

A note can be represented by an id, title, body, created timestamp, and updated timestamp. The updated timestamp should change only when the note content changes.

## Persistence rules
- Load stored notes once during initialization.
- Validate parsed storage before rendering it.
- Save after successful mutations.
- Handle malformed storage by starting from an empty collection instead of crashing the interface.
