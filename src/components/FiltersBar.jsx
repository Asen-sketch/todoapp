// the bar above the note panel, handles the filters for both sides
import FilterBox from './FilterBox';

function FiltersBar({allUserIds, selectedUser, onUserChange, sortOrder, onSortChange, completedSortOrder, onCompletedSortUpdate}) {
  const users = [{value: 'all', label: 'All'}, ...allUserIds.map((id) => ({value: id, label: `User ${id}`}))];
  const leftSort = [{value: 'asc', label: 'Ascending'}, {value: 'desc', label: 'Descending'}];
  const rightSort = [{value: 'asc', label: 'Oldest'}, {value: 'desc', label: 'Recent'}];

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem',
        backgroundColor: '#fefcf6',
        padding: '1rem 1.25rem',
        borderRadius: '12px',
        boxShadow: '0 6px 16px rgba(0,0,0,0.07)',
        border: '1px solid #e6d3b3',
      }}
    >
      {/* for left */}
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', minWidth: '220px'}}>
        <FilterBox label="User:" options={users} value={selectedUser} onChange={onUserChange}/>
        <FilterBox label="Sort:" options={leftSort} value={sortOrder} onChange={onSortChange}/>
      </div>
  
      {/* for right */}
      <div style={{ minWidth: '120px' }}>
        <FilterBox label="✓ Sort:" options={rightSort} value={completedSortOrder} onChange={onCompletedSortUpdate}/>
      </div>
    </div>
  );
}

export default FiltersBar;