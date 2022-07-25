

function formatDate(date) {
    return date.toLocaleDateString().replaceAll('.', '-');
}

module.exports = formatDate;