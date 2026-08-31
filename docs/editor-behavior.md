# Notes Editor Behavior

The editor should make the save lifecycle obvious and avoid accidental data loss.

## Editing
Keep the active note separate from the list of notes. Changes should update the active record without replacing unrelated notes.

## Empty content
An empty title should receive a safe fallback when saving, while an empty body can remain valid.

## Deletion
Deleting a note should require an explicit action and should remove the record from both the visible list and persistent storage.
