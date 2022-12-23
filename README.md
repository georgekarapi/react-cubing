# Rubik's Cube React component

Wrapper for cubing.js to provide a progressive solving of the Rubik cube

## Installation

```
npm install git+https://github.com/georgekarapi/react-cubing.git
```

## Usage

```
import TwistyPlayer from 'react-cubing';

<TwistyPlayer steps={3} percentage={100} />
```

**steps**: Number of randomg steps needed to solve the cube

**percentage**: Current tracked progress in percent (0-100)
0-Scrambled
100-Solved
