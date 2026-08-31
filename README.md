# Notes App

A simple browser-based notes application for creating and managing notes with a clean, lightweight interface.

## Features

- Create notes
- Edit notes
- Delete notes
- Simple organization
- Responsive interface
- Persistent browser storage
- Graceful handling of malformed stored data
- Empty-note validation
- Refresh-safe note persistence
- Clear local-storage data model

## Persistence

The application can use browser local storage to keep notes available between sessions. Stored data should be treated as application data rather than a secure vault.

## Data Handling

Notes should be normalized before storage, and empty notes should be rejected. When stored data is unavailable or malformed, the application should recover gracefully instead of breaking the interface.

## Note Lifecycle

A note moves through creation, editing, storage, and deletion. Each operation should keep the visible list synchronized with the stored data so the interface reflects the latest state.

## Storage Recovery

If saved notes cannot be parsed, the application should recover to a safe empty state and allow new notes to be created rather than leaving the interface unusable.

## How to Use

1. Create a new note.
2. Enter your content.
3. Save the note.
4. Edit or remove notes whenever needed.
5. Refresh the page to verify persisted notes.

## Technologies

- HTML5
- CSS3
- JavaScript
- Local Storage API

## Purpose

This project practices CRUD operations, local browser storage, validation, lifecycle handling, recovery, DOM manipulation, and responsive interface design.

## License

This project is open source and available under the MIT License.
