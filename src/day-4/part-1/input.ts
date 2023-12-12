export const EXAMPLE_INPUT = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

export const EXAMPLE_CARD_MATCHING_NUMBER_COUNT = [4, 2, 2, 1, 0, 0];

export const EXAMPLE_CARD_POINTS = [8, 2, 2, 1, 0, 0];

export const EXAMPLE_SOLUTION = 13;

export const SOLUTION = 24706;

export const INPUT = `Card   1: 61 73 92 28 96 76 32 62 44 53 | 61 17 26 13 92  5 73 29 53 42 62 46 96 32 21 97 99 28 12  4  7 44 19 71 76
Card   2:  3 88 36 12  2  9 15 55 21 89 | 23 39 98 36  2 24  9  3 78 95 55 37 12 61 38 88 85 89 13 15 96 45 21 25 30
Card   3: 96 44 52 56 82 89 73 50  9 68 | 39 71 64 32 13 57 56 67 34 84 51 53 41 16 38 63  5 80 70 75  7 76 85 83 18
Card   4: 54 84 76 44 38 33 12 17 93 94 | 18 21 53 11  7 98 78 92  9 32 29 50 86 23 95 77 22 79 71 80 60 35 54 36 91
Card   5:  8 11 33 98 37 80 39 76 53 91 | 82 35 27 29 50 73 24  4  5 53 93 65 45 69 74 54 59 44 43 87 58 38 28 16 98
Card   6: 10 58 39 28 35 79 14 73 64 96 | 90 86 38 93 74 29 21 14 33 16 85  9  2  1  3 71  5 76 50 73 19 47 34 58 69
Card   7:  1 96 73 38 64 87 45 25 99 10 | 11 30 96 43 17 72 24 55 79 64 98 46 25 38 45 73 99  1 91 87 90 10 18 75 85
Card   8: 24  3 23 50 58 35 57 51 22  2 | 95 50 22 75 27 57 72 25 12 61 82 16 76 23 51 24 52 11 81 63 58 65  3 35  2
Card   9: 98 59 30 22 10 69 68 17 48  8 | 22 75 34 63  7 72 30 73 19 13 35 80 58 84 98 59 77 57 55 46  6 52 25 48 42
Card  10: 82 32 48 60 17 85 97 22 26 87 | 33 49 81 29 70  8 74 45 97 68 36 78 83 11 14 90 93 99  1 59 95 30  4 26  2
Card  11: 73 71 18 75 29 87 36 98 72 33 | 56 48  1 32 81 10 64 41 21 93  6 88 30  4 14 51 96 39 37 42 59 69 36  5 66
Card  12:  1 67 47 54 45 75 73 64  6 26 | 10 53  5 50 57 27 95 54 64  2 61 89 73 84 70 69 93 85 49 92  1 19 21 76 13
Card  13: 65 19  2 74  3 20 83 11 82 78 | 70 19 55 87 90 50 79 59 77 52 62 85 22 75 96 73  6 65 25 74 63 10 11 20 44
Card  14: 44  8  3 31 57 91 39 25 43 80 | 75 51  1 56 39 97 13 11 10 78 53 22  9  8 23 66 38 90 14 50 26 16 74 83  6
Card  15: 78 34 48 33 74 12 44 98 17  8 | 52 19 81 77 63 72 49  8 90 84 87 96 76 57 62 11 20 74 95 12 91  5 89 44 25
Card  16: 28 90 29 51 63 42  3 65 37  5 | 83 68 61 66 81 53 82 14  4 47 87 77 62 18 85 16 10 94 86 33 55  1 20 15 21
Card  17: 77 11 72 70 34 74 14 89 57 42 |  7 28 30 57 35 65 96 90 12 64 85 25 99 41 80 68 39 84 83 56 70 13 73 93 50
Card  18: 45 11 62 99 34 19 82 13 71 31 |  6  8 63 66 86 35 69 75 53 97  7 68 78 72 64 42 95 51 94 24 98 14 55 76 80
Card  19: 42 30 59 65 19 41 49 12 13 55 | 57 16 31 26 39 51 25 28 56  3 34 85 46 80 52  5  8 89 37 95  6 98 69 63 64
Card  20:  7  9 84 17 12 49 45 83 74 63 | 82 46 66 59 14 21 29 35 33 76  6 67 81 41  1 89 13 40  5 52 62 27 50 37  4
Card  21: 31 81 25 28 33 95 71 30 84 23 | 30 29 21 84 31 95 23 33 92 71 27 86 52 87  5 44 81 28 13  6  9 45  1 25 93
Card  22: 78 21 36  3 39 38 11 97 54  6 | 42  2 78 32 27 39  6 13  4 86 88 44  3 54 38 43 36 82 97 21 66 69 11 65 72
Card  23: 37 19  7 49 52 67 17 53 16 75 | 52 91 13 75 35  3 25 14 78 33 17 49 83 56 16 81 62 53 19 37 73 67  7 71 28
Card  24: 44 19 43 15 81  1 50 29 31 94 | 68 43 66 75 61 50 29 44 31 85 19 83 49 77 15 72 24 60 69  1 17 52 94 90 81
Card  25:  3 45  5 83 72 12 61 24 48 13 |  5 52  3 45 32 13 65 55 72 57 15  1 79 19 82 75 12 56 85  2 14 54 16  8 86
Card  26: 98 86 62 91  5 69 34 66 88 87 | 86 95 30 52 38 62 87 98 46 88 31 53 34 59 22  5 54 29 91 56 66 25 69 32  3
Card  27: 91 85 44  3 59 83 79 90 23 48 |  3 53 12 62 28 90 93 15 71 65 17  4 84 63 48 30 44 85 23 59 83 91 79 35 77
Card  28: 49 30  6 43 64 92 32 90 74 83 | 31 90 59 83 17 34  3 67 94 58 75 18 52 74 89 60 53 32 42 33  1 28  7 46 41
Card  29: 98 15 24 47 48 26  7 43 52 75 | 48  1 39 27 25 22 15 65 57 87 74 45 76 63 35 26 47 81 80 99 17 88  7  9 18
Card  30: 52 48 96 80 81 12 86 26 29 21 |  6 88 14  5 91 59 37 25 35 16 15 43 60 50 73 46 12 75 10 78 30  9 68 65 33
Card  31: 94  2 68 75 65 99 48 71 80 50 |  2 65  5 99 75 94 77 26 68 80 57 15 40 41 79 90 82 71 36 56 59 16 78 50 48
Card  32: 47 14 55  1 62 99 93 18 17 91 |  7 89 17 20 91 55 29 19 99 41 14 47 77 36  1 73 35 93 48 18 45 57 60 62 92
Card  33: 27 61 63 74 43 25 65 98 48 76 | 64 66  4 40 82  6 21 54 95  8 97 77 83 76 26 39 70 34 73 69 88 79 19 52 60
Card  34: 71 86 21 59 81 44 45 40 54 77 | 46 51 80  7 36 48 37 95 70 63 88 49 90  9 24 62 66 79 71 59 29  4 40 20 22
Card  35:  6 14 46 53 85 20 43 59 96 94 | 42 39 84 54 65 48 85 64 86 37 47 88  8 38 49 79 30 71 96 56 89 98 20 60 11
Card  36: 30 13 45  1 15 29 95 83 20 90 | 26 95 93 80 29 38 15  1 96 79 41 67  9 43 50 86 30 11 55 90 34 56 88  7 65
Card  37:  8 92 23 52 43 16 87 81  6 89 | 92 31  3 54 60 56 52  8 27 88 39 25  5 94 28 29 74 82 91 81 43 47 87 59 70
Card  38: 32 68 11 96  7 85 70 39  8 90 | 10 40  8 82 35 22 85 96 97 78 83 88 68 20 62 12 43 33 63 13 75 72 64 36 93
Card  39: 83 73 64 34 69 85  7 89 42 94 | 94 16 38 37 61 89 98 73 95 66 45 13 58  5 65 79 48 68  3 27 52 87 25 39 35
Card  40: 24 42 57 48 56 94 95 62 12 71 | 95 17 56 43 72 18 29 63 16 41 75 39 12 48 69 47 81 10 87 49 36  9 31  8 32
Card  41:  4 96 99 82 62 50 28 41 55  3 | 84 19 14 15 37 39 88 59 35 89 22 68  1 33 49 67 29 61 17 18 75  8 96 25 63
Card  42: 72 13 34 70 16 49 54 77  9 92 | 99 90 96 36 30 24 61  3  6 26 67 80 17 70 65 10 87 53 21 63 64 93 14  1 45
Card  43: 58 71 95 47  2 41 83 46 87 13 | 17 63 25 84 80 39 68 40 77 73 61 51  6  2 69 78  9 24 19 65 43 92 67 44 75
Card  44: 54 40 57 13 50 88 48 74 32 66 | 99 14 56 63 27  1 20 47 62 25 83 49 43 23 16 96 33 61 80 79 69 60 92  6 55
Card  45: 96 55  3 60 45  5 90 99 69  6 | 75 68 14 41 89 80 51 99  5 13 50 36 25 67 72 95 65 59 34 83 82  8 45 35 33
Card  46: 47 82 88 72 33 48 24 41 91  9 | 91 19 94 84 20 98 48 64 21 22 14  5 35 36 27 40 43 67 56  6 17 32 11 99 88
Card  47: 36 28 57 22 38 45 43 17 88 76 | 18 34 56 75 21 26  7 74 98 28  4 12 92 65 16 15 25 46 99 87 49 85 33 29 37
Card  48: 16  2 25 26 61 44 88 73  8 74 | 10 16 12 99 45 70 15  2 85 47 17 62 77 44 21 73 26 92 31  8 88  7 61 69 64
Card  49: 69 57 49 52 17 37 77 20 65  3 | 16 37 45 69 38  8 14 81 91 77 65 89  5 78 13 17  3 39 73 52 70 49 20 58 55
Card  50:  9 89 58 46 41 77 93 16 90 63 | 71 96 90 52 27 29 14 22  3 20 63 18 88 42 30 24 70 38 15 75 81 40 99 26 16
Card  51: 79 57 28 98 59 96 81 44 14 30 | 31 70 16 99 52 32 22 21 66 25 40 94 82 26 35 64 54 80 38 95 53 65 20 42 55
Card  52: 60 40  5 65 35 82  9 78 64 31 | 34 73 74 60 40 77 19 30 52 98 55 64 20  8 90 31 33 39 28 85 63 50 48 32 61
Card  53: 40 46 51 28 33 23 36 21 27 97 | 25 75 24 41 47  1 64 52 56 62  5 79 58 23 72 39 36 83 44 80 32 13 14 69 37
Card  54: 57 84 68  8 12 65 69 32 38 40 | 98 75 19 43 28 31 32 20 60 53 94 71 38 59 61 97  4 79 15 93  1  2 18 13 21
Card  55: 20 79 29 40 74 41 43 99 24  2 | 26 22 56 33  6 11 14 10  3 62 30 61 94 98 52 71 39  4 12  2 21 36 41 95 77
Card  56: 93  5 57 26 77 84 35 71 96 16 | 74 98 15 17 68 88  2 65 52 23 64 59  7 93 82 31 75 87 69 49  9 35 24 91 55
Card  57: 14 89  2 15 28 69 72 68 70 25 | 54 88 32 20 89 90 80 62 97  4 94 46 77 76 74 10 85 11 81 61 53 23  7 39 78
Card  58: 39 52 81  1 47 28 99 14  9 26 | 14 93 89 19 64 72 25 12 71 42 60 15 96 83 34 32 95 54 29 10 55 43 73 80 74
Card  59: 22 36 98 99 92 50 47 69 76 33 | 90 28 51 31 10 67 77 24 82  4  6 62 25 43 95 80 70 64 40 89 55 96 73 45 19
Card  60: 84 44 70 51 79 23 93 62 48 61 | 91 80 72  9  3 64 87 16 36 81 34  8 12 24 10 22 35 40 11 94 65 77 28 82 26
Card  61: 65 69 68 94 84 63 62 49  6  2 | 74 31 54 81 59 24 92  6  9 62 49 68  2 77 67 69  4 84 65 46 94 63 40 34 38
Card  62: 78 62 31 91 13 35 56 87 43 67 | 31  9 78 91 23 16 62 58 13 83 63  4 71 75 84  8 30 68 60 12 35  7 22 64 56
Card  63: 57 52 91 29 54 13 44 74 65 77 | 80 63 12 65 47 54 24 74 51 29 44 16 91 68 62 96 77 28 34 13 39 64 57 67 52
Card  64: 20 35 98 46 26 84 83 21 86 18 | 11 99 21 78 18 14 92 66 28 37 31 83 36 46 68 26 84 35 67 98 86 20 91 52 55
Card  65: 34 90 57 66 36  3 13 30 64 62 | 62 90  3 75 81 54 17 70 57 13 69 35 30 20  8 92 66 67 34 60 87 36 14 64 91
Card  66: 29 91 56  4 85 41 58 36 48 10 | 33 78 54 58 16 56 41 27  4  7  9 71 98 51  3 91 10 48 90 11 85 29 14 36 76
Card  67: 13 45 37 99 81 93 75 65 83 36 | 39 86 49 32 83 64 71 13 65 56 34 38 21 93 97 36 69 22 45 75 59 37 29 98 62
Card  68: 81 18 38 50 13 86 22 85 52  1 | 31  1 92 11 64 81 85 86 45 54 37 13 66 15 22 69 52 50 40 58 38 18 99 84 93
Card  69: 91 12 81  2 99 22 52 35 95 28 | 10 28 44 12 95 39 67 81 54 69 92 91 36 19 75 51 96 22 52 29  2 99 42 25 35
Card  70: 16 48 63 76  2 60 61 58 12 99 | 54 99 16 83 66 59 58  6 63 70 60 61 77  8 51 86  3 20 98 90  5 30 52 64  1
Card  71: 86 25  4  2 62 42 19 80 11  5 | 10 51 82 90 55 99 97 85 24 91 53 31 38 72 67  4 21 29 42 84 39 98 71 33 43
Card  72: 72 86 57 48 85 93 46 39 12 40 | 46  8 86 68 83 48 36 77 61 97 39 96  3 53 67 26 43 56 60 12 85 52 31 22 63
Card  73: 38 88 23 78 90 55 30 14 69  2 | 66 42 23 37  1 40 84 16 13 17 31 19 58 38  7 90 32 30 43 69 89 76 78 12 55
Card  74: 21 38 35  8 27 70 69 42  5 13 | 51 75 17 31 96 15 95 41 97 93 88 76 55 89 26 44 77 58 71 19 61 73 21 43 84
Card  75: 69 16 13 98 88 97 34 26 39 95 | 19 39 53 30 98 65 83 40 93 88 16 35  2 60 84 75 94 13 82  6 52 12 25 92 69
Card  76: 80  8 99 74 25 52 26 30 57 83 | 63 20  9 76 87 38  6 75 31 27 90 46 60 14 64  3 55 84 13 32 89 23 28 86 10
Card  77: 57 86  8 94 89 40 42  3 18 98 | 88 73 66 11 79 72 95 39 45 30 60 40 68 97 43  5  3 19 44 86 77  4 23 76 32
Card  78: 66 86 28 15 14  9 23 81 36 58 |  5 12 98 27 77 41 15 43 46 55 91  7 36 32 21 16 85 59 61  1 96 13 40 14 34
Card  79: 40 68 52 33 63 89 15 64 28 70 |  7  2 77 48 36 82 50  5 98 70 93 94 21 80 22 69 10 73 39 49 71 51 74 30  1
Card  80: 92 81 37  5 63 66 38 68 49 20 | 18 62 36 52 65 17 19 26 91 23  6 58 45 54 75 90 79 72  7 24  2 74 14 10 56
Card  81: 57 72 41 25 90 47 19 93 96 64 | 32 61  7 74 59 37 56 68 27 52 10  4 99  8 44 47 94 29 16  5 23 65 28 66 84
Card  82: 62 65 45 19 57 20 87 53 50 69 | 52 36 28 17 93 81 48 14  4 72 67 27 91 47 58 95 90 49 55 35 12 11 75 15 25
Card  83: 73 24 22 75 33 43 30 57 59  7 |  8 73  2 71 20 17 22 67 30 43 75 84 85 92 33 24 70 59 45 95 56 31 34 11  5
Card  84: 83 44 39 27 17 93 67 31 23 40 | 44 83 27 95 17 66 58 22 67 35 93 39 41 10 20 18 92 40 24 34 86 64 23 71 31
Card  85: 39 22 33 35 71 13 86 41 73 99 | 47 95 98 50 14 78 23 80 24 97 99 43 68 30  6 56 34 42 52 91 32 44 66 89 37
Card  86: 97 93  8 54 40 11 29 55 10 36 |  7 64 58 70 55  9 34 97 31 17  8 62 49 87 90 15 93 56 43 98 78 54 38 13 22
Card  87: 41 96 97 46 80 59 78 89  8 34 | 56 40  6 46 23 80 92 60 85 78 26  9 30 39 41 44 59 36 38 65 43 96 17 63 97
Card  88: 32 55 91 50 95 29 92 90 73 68 | 36 12 93 90 82 20 87 73 85 31 54 59 96 99 56  8 32 22 55 50 91 14 27  6 46
Card  89: 87 77 82 74 14 92 21 15 68 93 | 68 19 61 25 94 33 12 84 44 20 91 16 23 36 93 72 47 17  8 53 18 14 83 24 57
Card  90: 34 85 33 44 96 68 89 15  2 36 | 65 55 98 15  8 91 21  9 17 16 30 62 46 90 45 82 36 33 47  6 74 43 72 34 31
Card  91: 89 66 32 11 12 37 63 31 86 49 |  7 97 93 98 18 81  1 85 31 49 69 27 56 83 89 37 11 96 12 72 14 64 16 59 35
Card  92: 43 54 57 20  8 78  1 17 79  5 | 51 58 96 67 28 33 20  7  5 55 79 27 70 52 89 40 69  4 36 76 54  9 11 59 95
Card  93: 39  4 47 22 60 62 50 27  6 13 | 89 63 40 16 38 45 92 86 14  3 97 21 49 47 76  4 78 52 37 43 75 27 36  1 51
Card  94: 29 14 53 32 98  9 70 97 88 86 | 11 49 41 15  8 42 52  2 66  4 78 74 51 67 38 13 24 97 45 20 40 64 29 59 56
Card  95: 85 51 50 20 18 76 48 26 41 23 | 14 45 51 34 49 94 83 25 56 43 71 35 33 74 66 40 48 37 65 62 68  9 99 80 95
Card  96:  8  5 12  7 68 18 37 29  1 13 | 52 36 67 62 94 99 24 65 22 83 97 63 16 69 12 15 91 85 71 39  9 34 29 50 26
Card  97: 40 67 12 93 11 68 16  2 56 34 | 76 27 31 45 19 44  8 30 42 75  9 72 97 62 58 60 47 91 18 70 71 89 40 59 84
Card  98: 63 26 80 84 53 17 65 70 88 22 | 51 61 69 27 29 37 85 82 42 72  2 38 89 24  7 68 64 90 21 31 75 87  5 79 66
Card  99: 15 94 55 20  7 10 72 48 17 61 | 78 45 17 10 72  7 69 55 66 20 68 24 14 94 82  2 22 50 48 15 13 73 61 44 11
Card 100: 31 61 23 89 70 81  9 12 64  4 | 23 81 61 12 75  7 70  4 59 98  3  6 50 37 99 16  9 36 39 35 31 64 40 13 89
Card 101: 27 12 95 46 25 67 91 54 52 94 | 81 70 28 27 56 65 30 41 57 94 67 60 53 91 10 16 12 71 46 95 52 36 42 25 54
Card 102: 98 88 23 70 93 71 40 33 75 28 | 28 93 75 71 10 77 92 60 90 98 35 81 61 38 26 32 41 63  3 54 46 14 62 53 67
Card 103: 26 24 33 49 77 39 85 93 97 76 | 86 26 17 76 95 69 40 50  9 27 12 44 13 49 25 94 77 21 35 22 85 93 16  8 47
Card 104: 51 13 73 86 94 23 14 24 30 32 | 73 93 18 41 70 23 24 89 71 96 62 14 48 27 31 84 81 94 30 13 32 29 52 46 51
Card 105: 98 77 75 41 62 76 45 72 88 27 | 94  1 60 22 84 26 65 52 10 43 27 67 82 61 75 95 46 34 45 11 39 85 63 48 93
Card 106: 90 79 89 17 36 96 95 60 50 23 | 69 84 89 10 12 63 27 21 72 15 43  5 55 48 24 74 26 85 90 65 42 81 99 36 44
Card 107: 49 10 63 60 37 96 16 98 24 46 | 63 75  1 55  3 33 68 49 76 17 97 31 64 45  2 82 70 30 41 12 14  9 87 54 13
Card 108: 54 27 21  4 99 32 83 97 42  8 | 51 81  8 55 62 16 60 54 72 94 42  7 82 18  3 65 80 59 66 46 57 86 61 50 32
Card 109: 69 61  5 73 87 89 25 34 42 54 | 35 74 64 71 93 11 66 61 19 45  3 62 10 44  9  6 27 65 94 76 79 63 26 36 70
Card 110: 26 95 86  2 94 62 14  5 20 18 | 61  1 99  5 65 13 56 71  2 91 32 98 18 97  3 20 92 59 28 93  4 39 17  9 15
Card 111: 62 15 25 50 92 45 77  1 16 39 | 62 28 48 70 31 69  3 75 44 38 59  4 41 53 32 19 82 36 39 95 88 56 35 91 43
Card 112: 39 35 48 73 34 30 57 94 42 62 | 85 49 82 69 16 23 60 88 10 70 15 14 77 27 45 62 65 87 52 79  4 30 93 33 22
Card 113: 79 75 72 54 98 74 57 15 77 64 | 21 89 24 65 53 29 60 19 14 11 46  1 90 86 79 17 68 34 39 35 44  8 52 66 62
Card 114: 84 35 28 72  9 38 79 13 77 76 | 86 64 50 17 82 23 80 43 91 63 73 98 15 90 70 54  2  1 67 66 25 11 41  7 42
Card 115: 31 14 86 27  8 75 25 72 50  9 | 80 43 69 49  2 60 85  5 51 46 70 57 93 55  6 84 87 66 53 74 32 29 13 63 41
Card 116: 49 81 23 62 61 31 87 76 39 98 |  3 15 32 52 24 56  7 62 18 79 27 98 31 99 71 39 34 58 87 76 81 91 33 61 49
Card 117: 36 60 14 13 15 72 45 66 52 23 | 50  4 26 19 37 41 13 59 52 92 60 45 23 20 36 16 94 14 61 89 93 51 76 83 91
Card 118: 31 21 57 69 84 86 25 63 19 87 | 34 86 13 29  2 73 69 38 99 63 87 79 25 35 68 19 89 91 88 57 53 84 31 21 72
Card 119: 20 38 40 82 72 46 95 26  1 77 | 63 40 65  2 62 47 82 95  1 53 41 56 19 77 81 33 93 61 55 20 72 38 52 26 46
Card 120: 55 61 86 89 74  3 91 67 36 92 | 34 59 77 72 91 98 39 54 36 11 21  1 79 95  7 17  3  4 67 12 89 69 96 85 19
Card 121: 63 75 79 88 35  4 99 65 45 58 | 65 35 92 15 98 99 25 83 45 14 79 17 28 58 75 89 52 88 40  2 33 12 95  4 63
Card 122:  2 12  7 28 20 92 21 59 10 88 | 10 45 20 68 17  2 39 56  7 44 34 48 21 62 88 43 16 77 57 59 92 28 12 76 47
Card 123: 33  8 23 28 15 54 20 76 97 38 | 51 96 38 28 84 19 57 69 45 85 97 26 12 20 39 17 54 76 74  8 33 34 80 91 23
Card 124: 50  5 79 61 40 55  8 51 71 28 |  2 79 15 28 90 50 62 73 83 20 31 40 94 11  5  8  3 56 55 51 61 97 80 71 76
Card 125: 16 30 10 62  2 66 83 67 85 89 | 92 67 38 41 18  3 45 63 25 64 68 17 57 71 70 83 59 39 48 31  5 61 49 11 77
Card 126: 52 24 61  2 15 38  9 75 30 18 |  5  9 77 52 38 75 16 99 78 87 61 31 50 73 18 49 30 28 43 60  2 15 24 92 47
Card 127: 79  8 57 33  7 18 35 59 50 25 | 72 63 31 64  7 22 75 96 80 79 50 84 59 57 30 55 34 43 15  8 88 21 28  5 98
Card 128: 71 72 12 56 36  1 75 81 60  4 |  6 34 75 72 94 20 12 59 19 71 81 80 97  3 60 30 37 93  1 31  4 36 56 22 62
Card 129: 78 55 42 31 73 35  5 82 12 66 | 51 28 81 97 50  2 71 83 39 19 14 64 38 22 69  8 57 54 89 27 34 44 67 91 29
Card 130: 74 89  1 92 27 55 16 46 33  2 | 92 89  1 84 19 21 46 13 99 16  7 55 78 32  2 42 33 74 35 47 22 41 27 69 85
Card 131: 58 59 85 45 83 53 44 41 93 68 |  7 68 18 13 37 15 31 78 96 82 70 60 99 21  2 17 46 77 88 76 41 75 90 61 89
Card 132: 30 71 18 67 50 28 47 86 90 66 | 20 97 50 51 54  3 84 93  1 73 11 86 27 99  9 26 55 12 59 28 18 47 77 71 61
Card 133: 46 58 72 54 34 57  8 89 98 20 | 99 65 58 16 81 91 34  5 23 92 72 29 41 98 59 27 13 54 57 62 88 19 75 89  2
Card 134: 13 37 20 77 43 65 94 30 73 23 | 19 66  5 63 57 72 65 93 68 62 14 48 85 12 52 25 64 54  2 31 24  3 39  1 32
Card 135: 79 42 76 64 68 91 22 66 25 63 | 94 41 51 87 57 80 68 60 95 93 30  8 44 24 26 76 98 42 71 12 58 85 13 27  4
Card 136: 74 45 81 24 85  3 28 75 53 48 | 84 10 30 86 66 59 52 12 81 11  3 54 88 94 48 96 28 47 61 34  9  7 58 27 93
Card 137: 16 42 55 80 99 39  2 91 59 37 | 49 97 63 50 76 20 35 92  8 82 99 48 56 87 32 53 33 60 13 96 22 71 43 23 91
Card 138: 41  7 81 54 30 72 43 59  4 48 | 11 79 16 19  7 21 72 83 94 35 17 33  6 18 64 91 10 88  9  2 32 67 27 12 89
Card 139: 43 31 83 44 89 66 53  2 91 40 | 49 48 58 20 33 32 97 68 29 62 22 81 65  9  4 55 26 57 99 66 60 10 16 42  7
Card 140: 80 51 96 20 95 17 13 35 30 40 | 22 27 88 12 97 44 56 49 57 71 47 37  8 84 81 45  2 14 78 41 55 10 26 43 16
Card 141: 35 10 16 92 60 88 59 84  8 14 | 38 92 16 66 52 31 60 10 84 64 32 45 88 39 54  8 59 69 35 20 49 29 14 50 42
Card 142: 51 69 72 40 58 52 65  1 68 18 | 48 52  1 69 68 95 88 91 38 99 55 58 40  5 51 72 94 65 31 82 35 36 18 86 87
Card 143: 81 76 34 56 32 90 30 25 26 83 | 67 32  9 34 56 30 76 88 28 81 74 65 52 25 54 26 66 11 33 35 21 63 90 53 83
Card 144: 52 49 10 63 93 88 17 16 34 28 | 98 29 92 82 69 42 36 93 67 28 61 35  7 68 12 91 44 65 58  1 26 22 46 32 56
Card 145: 58 89 39  7 46 50 52 54 49 21 | 17  6 52 94 12 92 49 16 77 89 46 50 37 70 58  7 54  3 64 33 59 21 22 71 39
Card 146: 92 83 29  3 48 38 12 86 42 50 | 86 52 67 15 99 54 12 50 10 66 36 44 55 48 89 83 38 19 70 29 46 92 76 42  3
Card 147:  4 54 34 78 89 32 69 15 33 16 | 63 57 62 84 87 20 50 41 67 71 45 79 70 60 42 98 48  1 92 77  3 85 88 52 86
Card 148: 61 21 36 94 45 60 28 76 38 10 | 79 96 94 23 56 59 24 38 63 95 68 15 41 89 75 69 48 18 33 45 10 21 90 36 91
Card 149: 60 44 45 84 13  2 12 64  1 30 | 94 76 43 34 54 80 90  2 37 14 84 20 88 57 12 63  6 74  9 18 78 41 23 13 42
Card 150: 28 29 65 50 89 17 96 83  2 15 | 74 48 40 62 53 93 84 77  8 21 46 83 92  1 34 59 33 18 61 79 13 76 26 87 60
Card 151: 96  5 61  3 68 42 67 12 97 69 | 62 14 80 82 74 69 30 92 59  3 28 89 73 31 48 97 24 11  1 18 37 66 70 58 94
Card 152: 61 71 13 45 27 35 16 79 10 49 | 12 42 82 97 94 78 92 23 33 88 98 96 90 89 67 99 58 57 79 25 75 10 87 93 76
Card 153: 72 17  8 50 35 13 63 41 75 49 | 46 33 90 18 36 71  1 70 56  9 59 53 52 12 92 49 79 95 80 78 27 73 22 91 19
Card 154:  3 98 54 80 45 92  2 57 22 64 |  3 39 30 10 67 86 79 95 85 15 97 82 63 49 42 68 31 78 94 46 14 76  4 73 33
Card 155: 65 11 46 89 47 90 34  9 55 27 | 56 77 79  9 67 42 58 16 37 60 21 96 57 30 97 98 78 82 41 13 70  2 17 44 29
Card 156: 23 88 83 72 55 85  3  5 20 80 | 99 64 35 40 33 69 32 42 15 14 21 97 11 43 70  4 62 53 60 77 82  7  9 93 31
Card 157: 62 26 48 49 19 10 75 88 43 52 | 87 57  3 59 26  4 80 39 21 96 99 64  5 24 41 22 72 53 68 43 34 28 50 90 86
Card 158: 30 72 87 43 18 16  6 83 58 13 | 32 74 25 81 15 54 17 19  5 75  9 49 27 89 77  8 61 12 52 39 87 90 24 60 62
Card 159: 78 32 66 92  1 84  5 88 80 55 | 97 38 37 98 30 28 50 16 94 90 45  7 89 44 36 96 13 62 82 11 68 34 95 91  8
Card 160: 29 67 83 32  9 18 24 38 69 35 | 21 59 48 61  4 50 43 72 53 76 65 97 42 20 39 92 94 26 98  3 99 77 95 60 80
Card 161: 61 84 65 10 15 13 53 86 81 54 | 50 44 92 14 47  5 75 39 19 81 71 34  4 25 73 43 82 49 86 65 97 62 87 59  8
Card 162:  5 62 96 14  8 44 82 41 71 89 | 86 73 60  5 14 71 51 26  8 21 17 41 89 83 13 33 96 18 82 44 92 95 90 50 62
Card 163: 15 16  3 68 25 36 12 43 53 20 | 90 18 17 51 91 66 29 21 98 63 69 14 27 33  5 54 64 31 80 60 45  7 82 47 88
Card 164: 56 57 88 81 91 95 48 96 68 76 | 44 48  9 78 45 10 13  6 28 33 92 15 69 57 70 39 86 79 40 81 66 71 18 80  2
Card 165: 68 29 98 52 89 81 88 54 24 40 | 89 88 40 34 49 19 57 54 80 72 81 67 10 98 82 69 18 73 62 16 68 24 52 85 29
Card 166: 13 28 96 87 62 37 44 64 68 51 | 57  9 21 73 83 47 89 46 55  6 93 97 26 15  7 80 84 14 23  3  8 20 98 69 34
Card 167: 39 28 37 40  9  4 91  8 87 14 | 64 35 79 28 32 39  1  9 77 91 14 25 17 40  7 11  2 69  8 37 24 88 36 44 87
Card 168: 55 89 98 63 34 22 17 43 86 59 | 32 86 62 63 84 68 31  9 87 61 48 59 55 20  7 30 89 43 17  2 34  4 35 98 54
Card 169: 21 79 83 32 14  9 92 98 16 53 | 80 21 78 97 22 15 86 48 88 90 47 50 99 75 55 60 17 12 82 25 89 66 11 94  6
Card 170: 22 82 43 80 90 78 73 70 14 97 | 28 68  7 90 80 99 22 98 73  5 41 87 74 43 14 56 84 36 20  3  6 75 97 88 49
Card 171: 47 57 71 68 44 78 93 25 28  9 | 78 71 24 96 48 82 33 68 22  9 59 47 57 46 13 27 61 38  6  4 20 14 93 56 32
Card 172: 19 98 50 38 96 60 27 31 55 22 | 88 33 52 68 36 28 67 23 31 98 61 40 48 41 78 25 12 20 91 21 58 74 73 37 49
Card 173: 86 15 81  5  9 12 14 21 47 74 | 49 19 83 40 67  2 93 36 56  7 65 58 33 64 87 11 32 43 52 28 92 59  6 73 41
Card 174: 54 21  9 89  1 91 97 51 36  7 | 81 74 63 12 80 50 56 45 34 36 65  1 77 52 66 97 60 31 62  9 72 99 24 39 90
Card 175: 10 71 36 13 20 86 34 65 35  1 | 32  4 84 72 58  7 62 70 95 43  8 20 11 87 99 30 16 25 85 73 86  1 17 15 67
Card 176: 91 98 51  9 65 97 41 86 17 93 | 44  6 16 60 25 43 73 35 53 85 88 99 14 51 57 67 70 82 87 46 40 45 28 62 15
Card 177: 87 29 80 11 88 92 50 39 12  5 | 44 64 81 40 33 41 78 32 97  9 37 69 98 21 18  4 59 20 49 13 65 96 82 85 66
Card 178: 77 66 84 13 74 81  3 21 42 94 | 88 31 26 97 15  1 93 54  2  4 14 56 72 39 47 27 62  6 37 55 49 87 75 44 58
Card 179:  6 71 23 79 42 39 85 93 28 88 | 48 72 46 71 28 82 42 39 16 50 88 18 23 93 56 97 51  8 67 36 30 79 85  6 11
Card 180: 24 64 83  1 75 14 99 85 73 55 | 86 55 73 75 61 47  7  1 24 65 85 77 36  3 91  9  6 82 72 89 99 64 25 59 14
Card 181: 22 79 46 27 71  9 57 60 94 42 | 16 56 41 96 30 72 18 38 23 44 13 79 35 87  6 68 15 46 33 11 28 80  5 77 20
Card 182:  9 35 53 73  7 64 66 58 40 13 | 58 38 49 64 85  4 13 50 77 66  9 37 40 35 84 72 36 53 28  8 92 21 56 59 27
Card 183: 79 96 64 80 95 29 81 34 92 44 | 50 21 95 92 28 43 76 79 22  2 44 63 40  4 24 86 81  9 96 80 25 64 98 11 34
Card 184: 50 66  2 93 84 95 54 96 86 25 | 71 96 64 92 49 86 20 93 32 50 25 54 65 28 66 44 36 95 79  2 84 68 39 37 41
Card 185: 27 20 84 49 72 71 41  1 93 13 | 27 84 85 49 60 47 67 15 80 13 19 41 34 57  2 82 18 66 44 58 78 93 71 92 65
Card 186: 64 46 63  4  9 59 85 52 34 49 |  7 50 74 34 93 84 59 63  2 16 77 96 32 49 85 46 39 12 33  8 52 38  9 57 54
Card 187: 27 94 63 35 23 88 22 80 91 33 | 43 18 23 80 48 40  2 94 59 26 91 32 35 64 45 63 62 51 33 88 73 10 78 66 27
Card 188: 34 43 79 99 72 74 96 51 71 54 | 98  9 38 61 10 86 95 41 94 18 44 24 83 13 56 46 37 76 17 62 87  5 72 80 90
Card 189: 25  7 41 55 23 56 71  1  2 14 | 80 71 39 13 93 69  1 54 83 70 50 48 63 85 19 51 95 56 61 44 34 52 17 59 33
Card 190: 12  7 69 90 34 39 11 77 18  5 | 17  8  4 20 13 95 43 69 91 77 41 66 54 48 15 71 34 68 90 80 76  1 59 55  3
Card 191: 46 90 41 96 23 63 67 61 75 12 | 24 97 94 93 17 10 86 76 59 75 41 38 67 47  7 92 81 96 29 77 20 61 74 73 78
Card 192: 96 46 86 58 16 99 98 38 27 25 | 76 57 79 74 94 84  4 91 89 25  6 96 99 75 41 18 81 88 26 19 98  3 43 51 14
Card 193: 92 52 87 63 59 77 79 38  8 96 | 70 72 26  8 49 51 39 53 94 42 55 44 65 78 34 66 41 11 82 56 12 88 33 23 95
Card 194: 49 19 18 28 94 70  6 34 24 43 | 98 91 99 46 66 20 31 80 88 61 90 56  8 73 92 51 45  9 63 67 86  3 55 78 40
Card 195: 26 99 10 13 62 14 91 77 31 44 | 22 54 60 70 27 52 58 62 55 97 90 76 96 63 72 48 86 11 80 88 30 33 45 67 74
Card 196:  2 29 23 92 61 87 75 63 50 55 | 83  7 74 69 16  4 72 62 51 37 22 10 84 28 94 24 89  5 53 88 33 14 99 41 35`;
