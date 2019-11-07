# JSON Resume Theme Standard Resume

> JSON Resume theme imitating the amazing style from [Standard Resume](https://standardresume.co/r/jeffleu)

![Web Screenshot](./docs/web-capture.png)

### Install the command line

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

Go ahead and install it:

```bash
npm install -g resume-cli
```

### Download theme

```bash
npm install -g jsonresume-theme-standard-resume
```

### Serve theme

While inside the theme folder, simply run:

```
resume serve -t standard-resume
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it!

## Development

I provided two scripts inside the `package.json`:

- `yarn html`: Generate `html` file and store it inside `/dev`.
- `yarn pdf`: Generate `pdf` file and store it inside `/dev`.

## License

Available under [the MIT license](http://mths.be/mit).
