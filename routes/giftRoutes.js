const db = await connectToDatabase();
router.get('/', (req, res) => { /* serves /api/gifts */ });
router.get('/:id', (req, res) => { /* serves /api/gifts/:id */ });
