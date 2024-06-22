# Manjaro Website

Built with [Nuxt 3](https://nuxt.com/).

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the static version for production:

```bash
pnpm run generate
```

Alternatively build SSR and preview production build:

```bash
pnpm run build
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License
### Code
This repository's code is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for the full license text.

### Content
All content (text, images, etc.) in this repository is © 2024 Manjaro GmbH & Co. KG. All rights reserved.

## Contributing
### Preparing Changes
We are always happy about fixes for bugs or small design issues. Thanks in advance! If you plan to do larger changes, please create first an issue ticket to let us discuss your plans, so in the end your changes will align with our overall plans for the website and can be merged.

### Content Copyright
Ensure you have permission to include any non-code content that is part of your contributions and be aware that for [above content license](#content) you grant Manjaro GmbH & Co. KG all rights to that content.

### Commit Message Guideline
The [Conventional Commits 1.0.0][conventional-commits] specification is applied with the following
amendments:

* Any line of the message must be 90 characters or shorter.
* Angular's [Revert][angular-revert] and [Subject][angular-subject] policies are applied.

[angular-revert]: https://github.com/angular/angular/blob/3cf2005a936bec2058610b0786dd0671dae3d358/CONTRIBUTING.md#revert
[angular-subject]: https://github.com/angular/angular/blob/3cf2005a936bec2058610b0786dd0671dae3d358/CONTRIBUTING.md#subject
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/#specification
