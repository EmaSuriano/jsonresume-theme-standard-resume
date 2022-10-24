# JSON Resume Theme Standard Resume

[![Master](https://github.com/EmaSuriano/jsonresume-theme-standard-resume/actions/workflows/master.yml/badge.svg)](https://github.com/EmaSuriano/jsonresume-theme-standard-resume/actions/workflows/master.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2b52e998-4c7c-4878-a797-c9f65a57414e/deploy-status)](https://app.netlify.com/sites/jsonresume-theme-standard-resume/deploys)

> [JSON Resume](https://jsonresume.org/) theme based on [Standard Resume](https://standardresume.co/r/jeffleu) style.

## [Demo](https://jsonresume-theme-standard-resume.netlify.app/)

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
