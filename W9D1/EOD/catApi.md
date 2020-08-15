## Cat Project API

### GET /kitten/image
Fetches an image from an external API, "https://api.thecatapi.com/v1/images/search?size=small", that returns information on a random cat image url.

```json
{
  "score": 0,
  "comments": [],
  "src": string (image url)
}
```

If it doesn't succeed, it returns an error message.

```json
{
  "message": string
}
```

### PATCH /kitten/upvote
Increments the score of the current kitten by 1 and returns the current score.

```json
{
  "score": number
}
```

### PATCH /kitten/downvote
Decrements the score of the current kitten by 1 and returns the current score.

```json
{
  "score": number
}
```