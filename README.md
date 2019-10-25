# Step By Step

## UI

- Timeline
- Range Slider
- Loading
  - Infinite Loading Animation


## Comand Lines

### lerna init

Create a new Lerna repo or upgrade an existing repo to the current version of Lerna.

```bash
lerna init
```

### lerna create \<name\>

Create a new lerna-managed package

```bash
lerna create timeline
```

### lerna add \<pkg\> [globs..]

Add a single dependency to matched packages

```bash
lerna add parcel --dev
lerna add typescript --scope=timeline
```

### lerna run \<script\> [options]

```bash
lerna run start --scope=clip-path-mousemove-effect
```
