/* NMTC Prep — practice question bank.
   Levels follow the NMTC contest structure:
   primary  = Primary (Gauss contest, Std V–VI)
   subjr    = Sub-Junior (Kaprekar contest, Std VII–VIII)
   junior   = Junior (Bhaskara contest, Std IX–X)
   inter    = Inter (Ramanujan contest, Std XI–XII)
   `answer` is the index of the correct entry in `options`. */

const LEVELS = {
    primary: { name: "Primary (Gauss)", classes: "Std V–VI" },
    subjr: { name: "Sub-Junior (Kaprekar)", classes: "Std VII–VIII" },
    junior: { name: "Junior (Bhaskara)", classes: "Std IX–X" },
    inter: { name: "Inter (Ramanujan)", classes: "Std XI–XII" }
};

const QUESTIONS = [
    /* ================= PRIMARY (Gauss, Std V–VI) ================= */
    {
        level: "primary", topic: "Arithmetic",
        q: "What is the sum 1 + 2 + 3 + … + 100?",
        options: ["5000", "5050", "5100", "4950"],
        answer: 1,
        solution: "Pair the numbers: (1+100), (2+99), … gives 50 pairs, each summing to 101. So the total is 50 × 101 = 5050."
    },
    {
        level: "primary", topic: "Number Sense",
        q: "A number leaves remainder 5 when divided by 9. What remainder does twice that number leave when divided by 9?",
        options: ["0", "5", "1", "2"],
        answer: 2,
        solution: "Twice the number leaves remainder 2 × 5 = 10, and 10 divided by 9 leaves remainder 1."
    },
    {
        level: "primary", topic: "Patterns",
        q: "Find the next term of the sequence 2, 6, 12, 20, 30, …",
        options: ["40", "36", "42", "44"],
        answer: 2,
        solution: "The differences are 4, 6, 8, 10, … increasing by 2 each time. The next difference is 12, so the next term is 30 + 12 = 42. (Each term is n × (n+1).)"
    },
    {
        level: "primary", topic: "Number Sense",
        q: "How many two-digit numbers have digits that add up to 9?",
        options: ["8", "9", "10", "11"],
        answer: 1,
        solution: "They are 18, 27, 36, 45, 54, 63, 72, 81 and 90 — nine numbers in all."
    },
    {
        level: "primary", topic: "Geometry",
        q: "What is the angle between the hour hand and the minute hand of a clock at exactly 3 o'clock?",
        options: ["60°", "90°", "120°", "45°"],
        answer: 1,
        solution: "At 3:00 the minute hand points at 12 and the hour hand at 3. That is 3 of the 12 hour-marks apart: 3 × 30° = 90°."
    },
    {
        level: "primary", topic: "Geometry",
        q: "A rectangle has perimeter 36 cm and length 10 cm. What is its area?",
        options: ["80 cm²", "60 cm²", "90 cm²", "100 cm²"],
        answer: 0,
        solution: "Length + width = 36 ÷ 2 = 18, so the width is 18 − 10 = 8 cm. Area = 10 × 8 = 80 cm²."
    },
    {
        level: "primary", topic: "Puzzles",
        q: "If ▲ + ▲ + ▲ = 27 and ▲ + ● = 14, what is the value of ●?",
        options: ["5", "6", "9", "4"],
        answer: 0,
        solution: "From the first equation ▲ = 27 ÷ 3 = 9. Then ● = 14 − 9 = 5."
    },
    {
        level: "primary", topic: "Number Sense",
        q: "What is the smallest number that is divisible by both 12 and 18?",
        options: ["24", "54", "36", "72"],
        answer: 2,
        solution: "We need the LCM. 12 = 2×2×3 and 18 = 2×3×3, so LCM = 2×2×3×3 = 36."
    },
    {
        level: "primary", topic: "Puzzles",
        q: "The ages of a father and son add up to 50 years, and the father is four times as old as the son. How old is the son?",
        options: ["8", "12", "10", "15"],
        answer: 2,
        solution: "If the son is x years old, the father is 4x, so x + 4x = 50 gives 5x = 50 and x = 10."
    },
    {
        level: "primary", topic: "Counting",
        q: "How many squares (of all sizes) are there on a 3 × 3 grid of unit squares?",
        options: ["9", "13", "14", "15"],
        answer: 2,
        solution: "There are 9 small 1×1 squares, 4 squares of size 2×2, and 1 square of size 3×3: 9 + 4 + 1 = 14."
    },
    {
        level: "primary", topic: "Arithmetic",
        q: "What is the value of 100 − 99 + 98 − 97 + … + 2 − 1?",
        options: ["49", "50", "51", "100"],
        answer: 1,
        solution: "Group in pairs: (100−99) + (98−97) + … + (2−1). There are 50 pairs, each equal to 1, so the sum is 50."
    },
    {
        level: "primary", topic: "Counting",
        q: "A book has pages numbered 1 to 100. How many times does the digit 7 appear in the page numbers?",
        options: ["10", "11", "19", "20"],
        answer: 3,
        solution: "The digit 7 appears 10 times in the units place (7, 17, …, 97) and 10 times in the tens place (70–79). Total = 20. (Note 77 contributes twice.)"
    },

    /* ================= SUB-JUNIOR (Kaprekar, Std VII–VIII) ================= */
    {
        level: "subjr", topic: "Number Theory",
        q: "What is the units digit of 7<sup>2026</sup>?",
        options: ["7", "9", "3", "1"],
        answer: 1,
        solution: "Units digits of powers of 7 cycle: 7, 9, 3, 1 with period 4. Since 2026 = 4×506 + 2, the units digit matches 7², which is 9."
    },
    {
        level: "subjr", topic: "Algebra",
        q: "If x + 1/x = 3, what is the value of x² + 1/x²?",
        options: ["6", "9", "7", "11"],
        answer: 2,
        solution: "Square both sides: (x + 1/x)² = x² + 2 + 1/x² = 9, so x² + 1/x² = 9 − 2 = 7."
    },
    {
        level: "subjr", topic: "Geometry",
        q: "What is the sum of the interior angles of a hexagon?",
        options: ["540°", "720°", "900°", "1080°"],
        answer: 1,
        solution: "For an n-sided polygon the sum is (n − 2) × 180°. For n = 6: 4 × 180° = 720°."
    },
    {
        level: "subjr", topic: "Number Theory",
        q: "How many two-digit prime numbers have both digits prime?",
        options: ["3", "4", "5", "6"],
        answer: 1,
        solution: "The digits must come from {2, 3, 5, 7}. A prime can't end in 2 or 5, so check numbers ending in 3 or 7: 23, 33, 53, 73, 27, 37, 57, 77. The primes among them are 23, 37, 53 and 73 — four numbers."
    },
    {
        level: "subjr", topic: "Averages",
        q: "What is the average of the first 20 odd numbers?",
        options: ["19", "20", "21", "40"],
        answer: 1,
        solution: "The sum of the first n odd numbers is n², so the sum is 20² = 400 and the average is 400 ÷ 20 = 20."
    },
    {
        level: "subjr", topic: "Number Theory",
        q: "Find the smallest positive number that leaves remainder 3 when divided by 5, and remainder 4 when divided by 7.",
        options: ["18", "23", "33", "38"],
        answer: 0,
        solution: "Numbers leaving remainder 4 on division by 7: 4, 11, 18, 25, … Among these, 18 leaves remainder 3 when divided by 5 (18 = 3×5 + 3)."
    },
    {
        level: "subjr", topic: "Ratio",
        q: "If a : b = 2 : 3 and b : c = 4 : 5, then a : b : c equals",
        options: ["2 : 3 : 5", "8 : 12 : 15", "6 : 8 : 10", "4 : 6 : 5"],
        answer: 1,
        solution: "Make the b values match: a : b = 8 : 12 and b : c = 12 : 15. So a : b : c = 8 : 12 : 15."
    },
    {
        level: "subjr", topic: "Percentages",
        q: "The price of an item is increased by 20% and then decreased by 20%. The net change in price is",
        options: ["no change", "4% increase", "4% decrease", "2% decrease"],
        answer: 2,
        solution: "The final price is 1.2 × 0.8 = 0.96 of the original — a 4% decrease."
    },
    {
        level: "subjr", topic: "Geometry",
        q: "In an isosceles triangle the vertex angle is 40°. Each base angle measures",
        options: ["40°", "60°", "70°", "80°"],
        answer: 2,
        solution: "The base angles are equal and all three angles sum to 180°: each base angle = (180° − 40°) ÷ 2 = 70°."
    },
    {
        level: "subjr", topic: "Counting",
        q: "How many diagonals does a decagon (10-sided polygon) have?",
        options: ["30", "35", "40", "45"],
        answer: 1,
        solution: "Each of the 10 vertices connects to 7 non-adjacent vertices, and each diagonal is counted twice: 10 × 7 ÷ 2 = 35."
    },
    {
        level: "subjr", topic: "Exponents",
        q: "Simplify: (2<sup>10</sup> × 2<sup>6</sup>) ÷ 2<sup>12</sup>",
        options: ["4", "8", "16", "32"],
        answer: 2,
        solution: "Add exponents when multiplying and subtract when dividing: 2^(10+6−12) = 2⁴ = 16."
    },
    {
        level: "subjr", topic: "Number Theory",
        q: "In how many zeros does 25! (the product 1 × 2 × 3 × … × 25) end?",
        options: ["5", "6", "7", "10"],
        answer: 1,
        solution: "Trailing zeros come from factors of 5 (there are plenty of 2s). Multiples of 5 up to 25 give ⌊25/5⌋ = 5 fives, and 25 = 5² gives one extra: total 6."
    },

    /* ================= JUNIOR (Bhaskara, Std IX–X) ================= */
    {
        level: "junior", topic: "Algebra",
        q: "If a + b + c = 0 and abc = 4, what is the value of a³ + b³ + c³?",
        options: ["0", "4", "12", "64"],
        answer: 2,
        solution: "The identity a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca) shows that when a + b + c = 0, a³ + b³ + c³ = 3abc = 12."
    },
    {
        level: "junior", topic: "Number Theory",
        q: "What is the remainder when 2<sup>100</sup> is divided by 7?",
        options: ["1", "2", "4", "6"],
        answer: 1,
        solution: "2³ = 8 ≡ 1 (mod 7), and 100 = 3 × 33 + 1, so 2¹⁰⁰ = (2³)³³ × 2 ≡ 1 × 2 = 2 (mod 7)."
    },
    {
        level: "junior", topic: "Number Theory",
        q: "How many positive divisors does 360 have?",
        options: ["18", "20", "22", "24"],
        answer: 3,
        solution: "360 = 2³ × 3² × 5. The number of divisors is (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24."
    },
    {
        level: "junior", topic: "Geometry",
        q: "A right-angled triangle has legs 6 and 8. What is the radius of its inscribed circle?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        solution: "The hypotenuse is 10. For a right triangle, the inradius is r = (a + b − c)/2 = (6 + 8 − 10)/2 = 2."
    },
    {
        level: "junior", topic: "Algebra",
        q: "If α and β are the roots of x² − 5x + 6 = 0, what is α² + β²?",
        options: ["11", "12", "13", "25"],
        answer: 2,
        solution: "α + β = 5 and αβ = 6, so α² + β² = (α + β)² − 2αβ = 25 − 12 = 13."
    },
    {
        level: "junior", topic: "Counting",
        q: "How many integers from 1 to 1000 are divisible by neither 2 nor 5?",
        options: ["300", "400", "500", "600"],
        answer: 1,
        solution: "By inclusion–exclusion: 1000 − 500 (multiples of 2) − 200 (multiples of 5) + 100 (multiples of 10) = 400."
    },
    {
        level: "junior", topic: "Algebra",
        q: "What is the value of 1/(1·2) + 1/(2·3) + 1/(3·4) + … + 1/(99·100)?",
        options: ["1", "99/100", "100/101", "1/100"],
        answer: 1,
        solution: "Each term telescopes: 1/(n(n+1)) = 1/n − 1/(n+1). The sum collapses to 1 − 1/100 = 99/100."
    },
    {
        level: "junior", topic: "Geometry",
        q: "A chord of length 16 is at distance 6 from the centre of a circle. What is the radius of the circle?",
        options: ["8", "9", "10", "12"],
        answer: 2,
        solution: "The perpendicular from the centre bisects the chord, giving a right triangle with legs 8 and 6. So r = √(8² + 6²) = √100 = 10."
    },
    {
        level: "junior", topic: "Counting",
        q: "At a party of 10 people, everyone shakes hands with everyone else exactly once. How many handshakes take place?",
        options: ["90", "50", "45", "100"],
        answer: 2,
        solution: "Each handshake is a pair chosen from 10 people: C(10, 2) = 10 × 9 ÷ 2 = 45."
    },
    {
        level: "junior", topic: "Number Theory",
        q: "What are the last two digits of 7<sup>2024</sup>?",
        options: ["01", "07", "43", "49"],
        answer: 0,
        solution: "7⁴ = 2401 ends in 01, so 7⁴ ≡ 1 (mod 100). Since 2024 is a multiple of 4, 7²⁰²⁴ ≡ 1 (mod 100), i.e. it ends in 01."
    },
    {
        level: "junior", topic: "Number Theory",
        q: "For every prime p greater than 3, the largest number that always divides p² − 1 is",
        options: ["12", "16", "24", "48"],
        answer: 2,
        solution: "p² − 1 = (p−1)(p+1). These are consecutive even numbers (one divisible by 4), giving a factor of 8; also one of p−1, p, p+1 is divisible by 3, and it isn't p. So 24 always divides p² − 1, and p = 5 gives exactly 24."
    },
    {
        level: "junior", topic: "Algebra",
        q: "The sum of the first n terms of an arithmetic progression is 3n². What is its 10th term?",
        options: ["57", "60", "27", "63"],
        answer: 0,
        solution: "The nth term is Sₙ − Sₙ₋₁ = 3n² − 3(n−1)² = 6n − 3. For n = 10 this is 57."
    },

    /* ================= INTER (Ramanujan, Std XI–XII) ================= */
    {
        level: "inter", topic: "Functions",
        q: "How many real solutions does the equation x = sin x have?",
        options: ["0", "1", "2", "infinitely many"],
        answer: 1,
        solution: "For x ≠ 0, |sin x| < |x|, so the only solution is x = 0. Exactly one real solution."
    },
    {
        level: "inter", topic: "Binomial Theorem",
        q: "What is the coefficient of x² in the expansion of (1 + x)<sup>10</sup>?",
        options: ["10", "45", "90", "120"],
        answer: 1,
        solution: "The coefficient of x² is C(10, 2) = 45."
    },
    {
        level: "inter", topic: "Combinatorics",
        q: "How many onto (surjective) functions are there from a set with 3 elements to a set with 2 elements?",
        options: ["8", "6", "12", "9"],
        answer: 1,
        solution: "There are 2³ = 8 functions in total; subtract the 2 constant functions, which are not onto: 8 − 2 = 6."
    },
    {
        level: "inter", topic: "Complex Numbers",
        q: "What is the value of i<sup>2026</sup>, where i = √(−1)?",
        options: ["1", "−1", "i", "−i"],
        answer: 1,
        solution: "Powers of i cycle with period 4. Since 2026 = 4 × 506 + 2, i²⁰²⁶ = i² = −1."
    },
    {
        level: "inter", topic: "Limits",
        q: "The limit of (1 + 1/n)<sup>n</sup> as n → ∞ is",
        options: ["1", "2", "e", "∞"],
        answer: 2,
        solution: "This is the classical definition of Euler's number e ≈ 2.71828."
    },
    {
        level: "inter", topic: "Sets",
        q: "How many non-empty subsets does a set with 10 elements have?",
        options: ["1024", "1023", "512", "2047"],
        answer: 1,
        solution: "A 10-element set has 2¹⁰ = 1024 subsets; excluding the empty set leaves 1023."
    },
    {
        level: "inter", topic: "Number Theory",
        q: "What is the remainder when 10<sup>100</sup> is divided by 7?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        solution: "10 ≡ 3 (mod 7) and 3⁶ ≡ 1 (mod 7) by Fermat's little theorem. Since 100 = 6 × 16 + 4, the remainder is 3⁴ = 81 ≡ 4 (mod 7)."
    },
    {
        level: "inter", topic: "Algebra",
        q: "If α and β are the roots of x² − x − 1 = 0, what is α⁵ + β⁵?",
        options: ["7", "11", "18", "25"],
        answer: 1,
        solution: "Let pₙ = αⁿ + βⁿ. Since α + β = 1 and αβ = −1, pₙ = pₙ₋₁ + pₙ₋₂ with p₁ = 1, p₂ = 3. So p₃ = 4, p₄ = 7, p₅ = 11 (the Lucas numbers)."
    },
    {
        level: "inter", topic: "Series",
        q: "What is the sum of the infinite series 1 + 1/2 + 1/4 + 1/8 + …?",
        options: ["3/2", "2", "e", "it diverges"],
        answer: 1,
        solution: "A geometric series with first term 1 and ratio 1/2 sums to 1/(1 − 1/2) = 2."
    },
    {
        level: "inter", topic: "Combinatorics",
        q: "In how many distinct ways can 5 people be seated around a circular table (rotations considered the same)?",
        options: ["120", "60", "24", "48"],
        answer: 2,
        solution: "Fix one person to remove rotational symmetry; the remaining 4 can be arranged in 4! = 24 ways."
    },
    {
        level: "inter", topic: "Number Theory",
        q: "How many pairs of integers (x, y) satisfy x² − y² = 17?",
        options: ["1", "2", "4", "0"],
        answer: 2,
        solution: "(x − y)(x + y) = 17, a prime. The factor pairs (1,17), (17,1), (−1,−17), (−17,−1) give (x, y) = (9, 8), (9, −8), (−9, −8), (−9, 8) — four pairs."
    },
    {
        level: "inter", topic: "Binomial Theorem",
        q: "What is the value of C(10,0) + C(10,1) + C(10,2) + … + C(10,10)?",
        options: ["512", "1023", "1024", "2048"],
        answer: 2,
        solution: "Set x = 1 in (1 + x)¹⁰: the sum of all binomial coefficients is 2¹⁰ = 1024."
    }
];
