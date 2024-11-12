import { useMemo } from 'react';
import styles from './index.module.scss';

interface Props {
  userName: string;
}

export default function RandomIcon({ userName }: Props) {
  const hash = useMemo(() => Array.from(userName).reduce((acc, char) => acc + char.charCodeAt(0), 0), []);
  const color = `hsl(${(hash) % 360}, 70%, 50%)`;

  return <OldManIcon color={color} />;
}

interface OldManIconProps {
  color: string;
}
function OldManIcon({ color }: OldManIconProps) {
  return (
    <svg className={styles.icon} version="1.0" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke="none" transform="translate(0.000000,542.000000) scale(0.100000,-0.100000)">
        <path d="M2650 5019 c-19 -9 -39 -14 -44 -11 -21 12 -102 7 -135 -9 -24 -12 -41 -14 -53 -8 -10 6 -19 5 -23 -1 -3 -5 -15 -10 -27 -10 -11 0 -32 -8 -46 -19 -46 -32 -102 -61 -120 -61 -9 -1 -46 -23 -82 -50 -35 -27 -83 -59 -106 -71 -48 -24 -354 -328 -354 -351 0 -8 -13 -32 -28 -54 -16 -21 -35 -55 -42 -74 -7 -19 -22 -47 -32 -61 -10 -15 -25 -56 -33 -90 -9 -35 -20 -80 -25 -100 -6 -20 -10 -62 -10 -93 0 -52 -2 -56 -23 -56 -12 0 -29 9 -37 20 -8 11 -20 20 -28 20 -17 0 -42 -24 -42 -40 0 -17 56 -67 95 -86 l32 -15 6 -272 c6 -271 12 -323 50 -422 8 -22 21 -69 28 -105 7 -36 25 -93 41 -128 15 -34 28 -67 28 -72 0 -6 4 -18 9 -28 42 -82 91 -194 91 -206 0 -24 38 -87 79 -131 21 -22 48 -55 61 -73 12 -18 39 -44 59 -58 20 -13 56 -40 81 -59 95 -73 127 -94 190 -126 l65 -33 229 -3 c218 -3 230 -2 246 17 12 14 30 20 58 20 22 0 44 5 47 10 3 6 30 10 60 10 30 0 57 4 60 10 3 6 28 10 55 10 27 0 52 4 55 10 3 6 20 10 36 10 17 0 49 13 74 30 24 17 51 30 59 30 8 0 32 10 53 22 21 12 72 39 113 60 41 21 77 42 80 46 3 4 17 13 33 21 15 8 27 18 27 23 0 4 6 8 13 8 21 0 80 60 127 130 24 36 58 81 76 101 17 20 46 66 63 101 16 35 44 82 61 103 17 21 33 50 37 64 3 14 14 38 24 53 11 14 19 30 19 35 0 5 9 26 20 48 11 22 20 45 20 52 0 8 7 24 15 36 11 18 14 79 15 337 0 284 -2 324 -20 405 -12 50 -25 115 -29 145 -9 53 -14 73 -31 115 -4 11 -14 43 -21 70 -6 28 -20 59 -29 70 -9 11 -29 45 -44 76 -14 32 -33 62 -41 69 -8 7 -15 18 -15 25 0 7 -7 18 -15 25 -9 7 -23 29 -32 49 -9 20 -39 61 -67 92 -28 32 -70 80 -94 108 -24 28 -49 51 -55 51 -7 0 -17 10 -22 22 -9 20 -126 87 -166 96 -8 2 -30 10 -49 19 -19 10 -41 18 -48 19 -8 1 -30 10 -50 20 -20 10 -43 19 -50 20 -8 1 -21 6 -30 10 -9 4 -23 8 -30 10 -8 1 -21 6 -30 10 -9 4 -26 9 -37 11 -11 2 -24 8 -29 13 -5 5 -16 5 -26 0 -9 -5 -22 -5 -30 0 -7 4 -23 4 -35 -2 -15 -7 -29 -7 -40 0 -12 6 -27 6 -46 -1 -19 -8 -35 -8 -51 0 -17 7 -30 8 -42 1 -12 -6 -26 -7 -40 -1 -15 7 -31 4 -56 -8z m394 -69 c5 -5 20 -10 32 -10 13 0 26 -4 29 -10 3 -5 15 -10 25 -10 11 0 35 -9 55 -20 20 -11 42 -20 50 -20 8 0 30 -9 50 -20 20 -11 41 -20 48 -20 29 0 146 -67 162 -92 9 -16 22 -28 30 -28 8 0 27 -16 42 -36 15 -20 56 -68 91 -106 34 -38 62 -74 62 -79 0 -6 21 -42 48 -82 26 -40 54 -85 62 -102 8 -16 22 -42 32 -56 9 -14 22 -47 29 -72 6 -26 15 -50 20 -53 5 -3 9 -22 9 -43 0 -43 -22 -72 -74 -96 -19 -9 -58 -39 -86 -66 -28 -27 -57 -49 -64 -49 -7 0 -34 -18 -59 -40 -27 -24 -55 -40 -70 -40 -14 0 -27 -6 -30 -12 -12 -34 -21 11 -18 92 3 120 1 122 -128 119 -62 -2 -105 2 -113 9 -8 6 -46 10 -90 9 -50 -1 -82 3 -90 11 -8 8 -52 12 -138 12 -114 0 -129 -2 -145 -20 -14 -16 -15 -23 -6 -34 15 -18 27 -211 14 -219 -10 -6 -141 -11 -220 -8 l-43 1 0 74 c0 41 -4 78 -10 81 -5 3 -10 13 -10 21 0 39 -17 41 -288 41 -188 0 -266 3 -274 11 -7 7 -27 12 -45 12 -18 0 -33 5 -33 10 0 15 -29 12 -46 -5 -11 -11 -14 -35 -12 -96 l3 -81 -37 -12 c-20 -7 -42 -10 -49 -5 -7 4 -20 4 -30 -1 -9 -5 -19 -7 -21 -4 -3 3 -18 7 -34 10 -40 6 -86 25 -106 42 -21 17 -24 98 -7 172 6 25 14 64 18 87 4 23 20 60 34 82 15 22 27 46 27 53 0 6 23 50 51 97 65 109 296 347 374 386 28 13 68 39 90 58 59 49 223 129 265 129 19 0 40 4 46 9 6 5 46 9 90 10 43 1 84 5 89 9 17 14 44 15 218 13 102 -1 174 -6 181 -13z m60 -998 c3 -5 38 -10 78 -11 40 -1 77 -6 83 -10 5 -5 46 -9 90 -10 44 -2 81 -4 83 -5 1 -2 4 -54 6 -117 2 -63 7 -128 11 -144 6 -26 3 -33 -17 -43 -13 -7 -42 -14 -64 -16 -23 -2 -45 -6 -51 -9 -5 -3 -15 -2 -23 3 -9 5 -19 5 -26 -1 -9 -8 -79 -17 -139 -19 -47 -1 -228 10 -232 14 -8 7 -13 325 -6 354 5 21 10 22 103 22 55 0 101 -4 104 -8z m865 -72 c11 -55 15 -155 15 -381 1 -343 9 -297 -85 -496 -22 -46 -39 -87 -39 -92 0 -5 -7 -14 -16 -22 -9 -7 -34 -49 -56 -93 -22 -45 -53 -94 -68 -111 -16 -16 -48 -59 -72 -95 -45 -68 -138 -142 -244 -195 -29 -14 -69 -39 -90 -56 -21 -16 -44 -27 -52 -24 -7 3 -33 -9 -57 -25 -24 -17 -50 -30 -58 -30 -8 0 -27 -6 -43 -14 -16 -8 -45 -13 -64 -11 -19 1 -40 -1 -45 -6 -6 -4 -37 -9 -70 -10 -33 -2 -65 -7 -72 -12 -7 -5 -29 -11 -50 -13 -50 -6 -53 -6 -87 -1 -17 3 -37 1 -45 -3 -38 -18 -80 -27 -92 -19 -7 4 -20 4 -30 -1 -9 -5 -19 -6 -23 -3 -10 10 -158 14 -170 4 -22 -17 -67 -21 -89 -9 -12 7 -30 13 -41 15 -10 2 -33 15 -50 29 -38 30 -101 78 -157 119 -44 32 -59 46 -138 137 -52 59 -81 107 -81 131 0 8 -17 47 -38 88 -21 41 -48 101 -62 134 -13 33 -26 65 -30 70 -3 6 -12 30 -19 55 -7 25 -17 59 -22 76 -5 17 -9 42 -9 55 0 14 -4 29 -8 34 -5 6 -14 30 -21 55 -7 25 -17 59 -22 75 -6 17 -13 143 -16 281 -6 259 -3 283 32 254 8 -7 15 -10 15 -7 0 3 15 1 33 -5 31 -10 93 -16 170 -17 l37 -1 0 -74 c0 -72 1 -75 36 -110 21 -21 46 -36 59 -36 13 0 27 -4 30 -10 3 -5 39 -10 80 -10 41 0 77 -4 80 -10 4 -6 80 -10 196 -10 188 0 190 0 214 25 22 21 25 33 25 100 l0 76 133 -3 132 -3 -4 -72 c-5 -106 -10 -103 210 -102 106 0 191 5 202 11 11 5 59 10 108 9 50 -1 90 3 94 9 3 5 22 10 41 10 20 0 42 6 50 14 16 17 20 121 4 131 -5 3 -10 17 -10 31 0 13 5 24 10 24 6 0 10 -4 10 -10 0 -5 13 -10 28 -10 20 0 46 15 86 50 31 28 63 50 70 50 7 0 36 23 65 50 31 30 61 50 75 50 12 0 31 9 42 20 33 34 47 21 63 -60z m-2004 30 c4 -6 102 -10 261 -10 l254 0 0 -170 0 -170 -32 -1 c-92 -4 -302 2 -312 9 -6 4 -39 7 -73 8 -63 2 -131 25 -138 47 -7 22 -13 218 -8 258 4 29 10 39 24 39 10 0 21 -4 24 -10z" />
        <path d="M2595 1971 c-6 -6 -31 -12 -56 -14 -26 -2 -50 -7 -56 -10 -5 -3 -15 -2 -23 3 -7 4 -23 4 -35 -2 -15 -7 -29 -7 -41 0 -10 5 -25 6 -33 2 -37 -18 -80 -27 -92 -20 -6 5 -22 4 -34 -2 -15 -7 -29 -7 -42 1 -14 7 -23 7 -30 0 -6 -6 -37 -12 -69 -13 -33 -2 -70 -7 -84 -13 -14 -5 -50 -9 -80 -8 -30 0 -67 -5 -82 -13 -15 -7 -32 -11 -37 -8 -4 3 -26 -3 -47 -13 -22 -11 -45 -16 -53 -11 -7 4 -26 1 -42 -7 -16 -8 -33 -11 -39 -8 -6 4 -17 2 -24 -4 -7 -6 -30 -12 -52 -13 -21 -2 -63 -15 -93 -30 -29 -16 -59 -28 -65 -28 -7 0 -27 -7 -44 -16 -18 -8 -36 -13 -42 -9 -6 3 -22 -2 -38 -13 -40 -28 -78 -35 -96 -17 -8 8 -19 15 -24 15 -24 0 -76 -36 -101 -70 -15 -22 -51 -59 -80 -83 -74 -63 -118 -117 -147 -181 -14 -31 -30 -58 -35 -62 -5 -3 -25 -36 -44 -72 -19 -37 -39 -74 -45 -82 -10 -16 -60 -131 -164 -373 -9 -21 -16 -45 -16 -55 0 -9 -14 -46 -30 -80 -17 -35 -30 -70 -30 -79 0 -8 -11 -39 -25 -69 -14 -30 -25 -59 -25 -65 0 -12 -76 -125 -90 -134 -25 -15 0 -75 30 -75 15 0 80 69 80 85 0 6 9 17 20 25 11 8 20 24 20 35 0 20 19 80 31 100 4 6 12 35 19 65 7 30 21 70 31 88 11 18 24 53 30 78 6 24 20 61 30 82 11 20 19 43 19 52 0 9 4 20 8 25 5 6 15 26 22 45 14 38 84 193 102 225 6 11 25 45 40 75 16 30 38 64 49 76 10 11 19 25 19 32 0 16 37 81 66 115 13 16 60 63 104 104 l80 75 61 -1 c46 0 68 4 89 19 16 11 35 20 43 20 9 0 19 5 22 10 3 6 16 10 28 10 13 0 47 13 78 29 54 28 85 37 164 48 22 3 46 10 52 15 7 6 31 10 53 10 22 0 42 3 45 9 4 5 21 9 40 9 19 0 37 5 40 10 3 6 39 10 80 10 41 0 77 5 80 10 3 6 29 10 56 10 28 0 59 5 71 11 11 6 56 11 101 11 45 0 90 5 101 10 10 6 64 10 119 10 55 -1 109 4 120 9 27 15 756 14 770 0 6 -6 35 -11 63 -11 29 0 55 -4 58 -8 3 -5 26 -9 53 -10 26 -2 64 -10 83 -19 19 -10 46 -19 60 -20 14 -2 32 -6 40 -10 8 -3 21 -7 28 -9 8 -1 21 -6 30 -10 9 -4 28 -9 42 -11 14 -2 32 -6 40 -10 8 -3 29 -8 45 -10 17 -3 39 -12 50 -22 11 -9 34 -18 50 -20 17 -1 34 -7 40 -12 5 -5 19 -9 31 -9 13 0 26 -4 29 -10 3 -5 19 -10 34 -10 15 0 46 -9 69 -20 22 -11 48 -20 56 -20 8 0 18 -4 21 -10 3 -5 14 -10 23 -10 26 0 183 -81 217 -112 17 -15 39 -28 50 -29 11 0 33 -18 50 -41 17 -23 44 -49 60 -58 29 -16 134 -151 155 -200 13 -28 25 -52 66 -130 17 -30 35 -64 41 -75 30 -57 62 -134 68 -165 7 -37 19 -69 41 -110 12 -22 87 -175 117 -237 12 -26 51 -31 73 -9 20 20 18 33 -10 61 -29 29 -110 194 -156 320 -20 56 -111 247 -144 305 -8 14 -20 39 -26 56 -6 18 -19 40 -28 51 -37 41 -82 102 -82 110 0 13 -74 83 -86 83 -13 0 -43 32 -58 63 -7 12 -30 31 -54 43 -23 11 -54 33 -68 47 -15 15 -37 27 -49 27 -12 0 -28 7 -35 15 -14 17 -67 45 -86 45 -7 0 -30 9 -50 20 -21 12 -44 18 -56 14 -11 -3 -27 0 -36 8 -33 26 -62 38 -91 38 -17 0 -33 5 -36 10 -3 6 -17 10 -30 10 -13 0 -27 5 -30 10 -4 6 -10 8 -15 5 -5 -3 -28 5 -51 17 -23 12 -56 23 -72 25 -17 2 -35 8 -42 13 -7 5 -14 7 -18 4 -3 -3 -16 0 -29 7 -12 7 -34 14 -47 15 -13 2 -31 6 -40 10 -9 4 -27 8 -40 10 -13 1 -40 11 -60 20 -20 10 -61 18 -92 19 -31 1 -63 6 -70 11 -7 4 -32 10 -54 12 -22 2 -44 7 -50 11 -5 4 -23 6 -40 4 -16 -1 -34 -3 -40 -3 -129 1 -162 1 -175 0 -8 0 -31 0 -50 0 -19 1 -43 1 -52 0 -10 0 -25 0 -33 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -22 0 -30 0 -8 0 -21 0 -27 -1 -7 0 -22 2 -33 6 -11 3 -25 1 -30 -4z" />
        <path d="M1674 647 c-6 -7 -11 -38 -11 -68 0 -31 -7 -68 -17 -86 -9 -18 -16 -39 -16 -47 0 -8 -11 -36 -25 -62 -27 -52 -32 -99 -11 -126 30 -40 66 -9 66 56 0 25 4 48 10 51 5 3 14 25 20 48 6 23 18 57 26 75 22 47 27 140 10 158 -18 17 -37 17 -52 1z" />
        <path d="M4272 545 c-19 -22 -4 -121 27 -175 41 -73 59 -84 87 -56 19 19 18 33 -6 58 -34 36 -51 85 -44 123 9 52 -32 85 -64 50z" />
      </g>
    </svg>
  );
}