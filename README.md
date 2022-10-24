# JSON Resume Theme Standard Resume

> JSON Resume theme based on [Standard Resume](https://standardresume.co/r/jeffleu) style.

## Demo

## How to use

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

```bash
# Download official resume CLI
> npm install -g resume-cli

# Download Theme
> npm install -g jsonresume-theme-standard-resume

# Display your resume with the theme
> resume serve -t standard-resume
Preview: http://localhost:4000
```

## Development

I provided two scripts inside the `package.json`:

- `yarn start`: Start server on [http://localhost:3000/](http://localhost:3000/), and generate `html` and `pdf` on demand.
- `yarn build`: Generate `html` and `pdf` file and store it inside `/public`.
- `yarn preview`: Start static server on `/public`.

## License

Available under [the MIT license](http://mths.be/mit).
